import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");

const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
};

function log(message, color = "reset") {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function exec(command, options = {}) {
  try {
    return execSync(command, {
      cwd: rootDir,
      encoding: "utf-8",
      stdio: options.silent ? "pipe" : "inherit",
      ...options,
    });
  } catch (error) {
    if (!options.silent) {
      throw error;
    }
    return null;
  }
}

function checkUncommittedChanges() {
  log("Проверка незакоммиченных изменений...", "blue");
  const status = exec("git status --porcelain", { silent: true });

  if (status) {
    const lines = status.trim().split("\n").filter(Boolean);
    const allowedFiles = ["package.json", "CHANGELOG.md"];
    const uncommitted = lines.filter((line) => {
      const file = line.replace(/^[AMDRC? ]{2} /, "").trim();
      return !allowedFiles.some((allowed) => file.includes(allowed));
    });

    if (uncommitted.length > 0) {
      log("Ошибка: Обнаружены незакоммиченные изменения:", "red");
      uncommitted.forEach((file) => log(`  - ${file}`, "red"));
      log(
        "\nПожалуйста, закоммитьте все изменения перед созданием версии.",
        "yellow"
      );
      process.exit(1);
    }
  }
  log("✓ Все изменения закоммичены", "green");
}

function runChecks() {
  log("\nЗапуск проверок кода...", "blue");

  log("Запуск ESLint...", "blue");
  try {
    exec("yarn lint");
    log("✓ ESLint проверка пройдена", "green");
  } catch (error) {
    log("✗ ESLint проверка не пройдена", "red");
    process.exit(1);
  }

  log("Запуск TypeScript проверки и сборки...", "blue");
  try {
    exec("yarn build");
    log("✓ TypeScript проверка и сборка пройдены", "green");
  } catch (error) {
    log("✗ TypeScript проверка не пройдена", "red");
    process.exit(1);
  }
}

function getCurrentVersion() {
  const packageJsonPath = join(rootDir, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
  return packageJson.version;
}

function incrementVersion(version) {
  const parts = version.split(".");
  const major = parseInt(parts[0]) || 0;
  const minor = parseInt(parts[1]) || 0;
  const patch = parseInt(parts[2]) || 0;
  return `${major}.${minor}.${patch + 1}`;
}

function getLastVersionTag() {
  try {
    const tags = exec("git tag --sort=-version:refname", { silent: true });
    if (tags) {
      const tagLines = tags.trim().split("\n").filter(Boolean);
      const versionTag = tagLines.find((tag) => /^v?\d+\.\d+\.\d+$/.test(tag));
      if (versionTag) {
        return versionTag.replace(/^v/, "");
      }
    }
  } catch (error) {}

  try {
    const changelogPath = join(rootDir, "CHANGELOG.md");
    try {
      const changelog = readFileSync(changelogPath, "utf-8");
      const versionMatch = changelog.match(/^## (\d+\.\d+\.\d+)/m);
      if (versionMatch) {
        return versionMatch[1];
      }
    } catch (error) {}
  } catch (error) {}

  return null;
}

function getBranchBaseCommit() {
  // Пробуем найти точку ответвления от основных веток
  const mainBranches = ["redesign", "main", "master", "dev"];

  for (const branch of mainBranches) {
    try {
      // Проверяем, существует ли ветка
      const branchExists = exec(`git rev-parse --verify ${branch}`, {
        silent: true,
      });
      if (branchExists && branchExists.trim()) {
        // Находим merge-base (точку ответвления)
        const mergeBase = exec(`git merge-base HEAD ${branch}`, {
          silent: true,
        });
        if (mergeBase && mergeBase.trim()) {
          return mergeBase.trim();
        }
      }
    } catch (error) {
      // Ветка не найдена, пробуем следующую
    }
  }

  return null;
}

function getChangedFiles() {
  log(
    "\nПолучение списка измененных файлов (коммиты текущей ветки)...",
    "blue"
  );

  let baseRef = null;

  // Сначала пробуем найти точку ответвления от основной ветки
  baseRef = getBranchBaseCommit();

  // Если не нашли, пробуем последний bump commit
  if (!baseRef) {
    try {
      const lastBumpCommit = exec(
        `git log --grep="chore: bump version to" --format="%H" -1`,
        { silent: true }
      );
      if (lastBumpCommit && lastBumpCommit.trim()) {
        baseRef = lastBumpCommit.trim();
      }
    } catch (error) {}
  }

  // В крайнем случае берём первый коммит
  if (!baseRef) {
    try {
      const firstCommit = exec("git rev-list --max-parents=0 HEAD", {
        silent: true,
      });
      if (firstCommit && firstCommit.trim()) {
        baseRef = firstCommit.trim();
      }
    } catch (error) {}
  }

  if (!baseRef) {
    log("Не удалось определить базовый коммит", "yellow");
    return [];
  }

  try {
    const diff = exec(`git diff --name-only ${baseRef} HEAD`, { silent: true });
    if (diff) {
      const files = diff
        .trim()
        .split("\n")
        .filter(Boolean)
        .filter((file) => {
          return (
            !file.includes("node_modules") &&
            !file.includes(".git") &&
            !file.includes("dist") &&
            !file.includes(".cache") &&
            file !== "package-lock.json" &&
            file !== "yarn.lock" &&
            file !== "package.json" &&
            file !== "CHANGELOG.md"
          );
        });

      log(`Базовый коммит: ${baseRef.substring(0, 7)}`, "blue");
      return [...new Set(files)];
    }
  } catch (error) {
    log(
      "Предупреждение: Не удалось получить список измененных файлов",
      "yellow"
    );
  }

  return [];
}

function getBumpRunnerName() {
  try {
    const gitName = exec("git config user.name", { silent: true });
    if (gitName && gitName.trim()) {
      return gitName.trim();
    }
    const gitEmail = exec("git config user.email", { silent: true });
    if (gitEmail && gitEmail.trim()) {
      return gitEmail.trim();
    }
  } catch (error) {}

  return "unknown";
}

function updatePackageJson(newVersion) {
  log(`\nОбновление package.json до версии ${newVersion}...`, "blue");
  const packageJsonPath = join(rootDir, "package.json");
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf-8"));
  packageJson.version = newVersion;
  writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2) + "\n");
  log(`✓ package.json обновлен`, "green");
}

function updateChangelog(newVersion, changedFiles, bumpRunnerName) {
  log(`\nОбновление CHANGELOG.md...`, "blue");
  const changelogPath = join(rootDir, "CHANGELOG.md");

  const date = new Date().toISOString().split("T")[0];
  const filesList =
    changedFiles.length > 0
      ? changedFiles.map((file) => `- ${file}`).join("\n")
      : "- (нет измененных файлов)";

  const newEntry = `## ${newVersion} | ${date} | Автор: "${bumpRunnerName}"

### Измененные файлы:
${filesList}

---

`;

  let changelog = "";
  try {
    changelog = readFileSync(changelogPath, "utf-8");
  } catch (error) {
    changelog = "# Changelog\n\n";
  }

  // Нормализуем формат файла: убеждаемся, что есть заголовок
  if (!changelog.trim().startsWith("# Changelog")) {
    changelog = `# Changelog\n\n${changelog}`;
  }

  // Вставляем новую запись сразу после заголовка "# Changelog"
  // Ищем позицию после заголовка и возможных пустых строк
  const headerPattern = /^(# Changelog\s*\n)/;
  if (headerPattern.test(changelog)) {
    // Заменяем заголовок на заголовок + новая запись
    changelog = changelog.replace(headerPattern, `$1${newEntry}`);
  } else {
    // Если заголовок не найден, создаем новый файл
    changelog = `# Changelog\n\n${newEntry}${changelog}`;
  }

  try {
    writeFileSync(changelogPath, changelog, "utf-8");
    log(`✓ CHANGELOG.md обновлен`, "green");
  } catch (error) {
    log(`✗ Ошибка при записи CHANGELOG.md: ${error.message}`, "red");
    throw error;
  }
}

function commitChanges(newVersion) {
  log(`\nСоздание коммита с версией ${newVersion}...`, "blue");

  try {
    // Проверяем, есть ли изменения для коммита
    const status = exec("git status --porcelain package.json CHANGELOG.md", {
      silent: true,
    });

    if (!status || !status.trim()) {
      log("Предупреждение: Нет изменений для коммита", "yellow");
      log("Возможно, файлы уже были закоммичены", "yellow");
      return;
    }

    exec("git add package.json CHANGELOG.md", { silent: false });

    // Проверяем, что файлы действительно добавлены
    const diffCached = exec("git diff --cached --name-only", { silent: true });
    if (!diffCached || !diffCached.includes("package.json")) {
      log("✗ Ошибка: package.json не был добавлен в индекс", "red");
      process.exit(1);
    }
    if (!diffCached || !diffCached.includes("CHANGELOG.md")) {
      log("✗ Ошибка: CHANGELOG.md не был добавлен в индекс", "red");
      process.exit(1);
    }

    exec(`git commit -m "chore: bump version to ${newVersion}"`, {
      silent: false,
    });
    log(`✓ Коммит создан`, "green");
  } catch (error) {
    log("✗ Ошибка при создании коммита", "red");
    log(`Детали ошибки: ${error.message}`, "yellow");
    log(
      "Возможно, нет изменений для коммита или коммит был отклонен",
      "yellow"
    );
    process.exit(1);
  }
}

function main() {
  log("🚀 Запуск версионирования...\n", "blue");

  checkUncommittedChanges();
  runChecks();

  const currentVersion = getCurrentVersion();
  log(`\nТекущая версия: ${currentVersion}`, "blue");

  const newVersion = incrementVersion(currentVersion);
  log(`Новая версия: ${newVersion}`, "green");

  const lastVersion = getLastVersionTag();
  if (lastVersion) {
    log(`Последняя версия в истории: ${lastVersion}`, "blue");
  } else {
    log("Это первая версия", "blue");
  }

  const changedFiles = getChangedFiles();
  log(`Найдено измененных файлов: ${changedFiles.length}`, "blue");
  if (changedFiles.length > 0 && changedFiles.length <= 10) {
    changedFiles.forEach((file) => log(`  - ${file}`, "blue"));
  } else if (changedFiles.length > 10) {
    changedFiles.slice(0, 10).forEach((file) => log(`  - ${file}`, "blue"));
    log(`  ... и еще ${changedFiles.length - 10} файлов`, "blue");
  }

  const bumpRunnerName = getBumpRunnerName();
  log(`Автор (yarn bump): ${bumpRunnerName}`, "blue");

  updatePackageJson(newVersion);
  updateChangelog(newVersion, changedFiles, bumpRunnerName);
  commitChanges(newVersion);

  log(`\n✅ Версия ${newVersion} успешно создана!`, "green");
  log(`\nСледующие шаги:`, "blue");
  log(`  1. Проверьте изменения: git log -1`, "blue");
  log(`  2. Отправьте изменения: git push`, "blue");
  log(
    `  3. Создайте тег (опционально): git tag v${newVersion} && git push origin v${newVersion}`,
    "blue"
  );
}

main();
