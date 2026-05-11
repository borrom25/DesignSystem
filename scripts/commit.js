/* eslint-env node */
/* eslint-disable @typescript-eslint/no-unused-vars */

import { execSync } from "child_process";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import readline from "readline";

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

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function main() {
  log("🚀 Автоматический коммит с проверкой кода...\n", "blue");

  log("Проверка staged файлов...", "blue");
  const stagedFiles = exec("git diff --cached --name-only", { silent: true });

  if (!stagedFiles || !stagedFiles.trim()) {
    log("❌ Нет файлов для коммита. Добавьте файлы через git add", "red");
    process.exit(1);
  }

  const files = stagedFiles.trim().split("\n").filter(Boolean);
  log(`✓ Найдено ${files.length} файлов для коммита`, "green");

  log("\n📝 Автоматическое исправление кода...", "blue");

  try {
    log("Форматирование через Prettier...", "blue");
    exec("yarn format");
    log("✓ Форматирование завершено", "green");

    log("Исправление ошибок ESLint...", "blue");
    exec("yarn lint:fix");
    log("✓ ESLint исправления применены", "green");
  } catch (error) {
    log(
      "⚠️  Некоторые ошибки не могут быть исправлены автоматически",
      "yellow"
    );
  }

  log("\n📦 Добавление исправленных файлов в staging...", "blue");
  try {
    exec("git add -u");
    log("✓ Файлы добавлены в staging", "green");
  } catch (error) {
    log("⚠️  Ошибка при добавлении файлов", "yellow");
  }

  log("\n🔍 Финальная проверка кода...", "blue");

  let hasErrors = false;

  log("Проверка ESLint...", "blue");
  try {
    exec("yarn lint", { silent: true });
    log("✓ ESLint проверка пройдена", "green");
  } catch (error) {
    log("❌ ESLint проверка не пройдена", "red");
    hasErrors = true;
  }

  log("Проверка TypeScript типов...", "blue");
  try {
    exec("yarn tsc --noEmit", { silent: true });
    log("✓ TypeScript проверка пройдена", "green");
  } catch (error) {
    log("❌ TypeScript проверка не пройдена", "red");
    hasErrors = true;
  }

  if (hasErrors) {
    log(
      "\n❌ Обнаружены ошибки, которые нельзя исправить автоматически",
      "red"
    );
    log("Пожалуйста, исправьте ошибки вручную и попробуйте снова", "yellow");
    process.exit(1);
  }

  log("\n📋 Файлы для коммита:", "blue");
  const finalStaged = exec("git diff --cached --name-only", { silent: true });
  if (finalStaged) {
    finalStaged
      .trim()
      .split("\n")
      .filter(Boolean)
      .forEach((file) => {
        log(`  - ${file}`, "blue");
      });
  }

  log("\n💬 Введите сообщение коммита:", "blue");
  const commitMessage = await askQuestion("> ");

  if (!commitMessage.trim()) {
    log("❌ Сообщение коммита не может быть пустым", "red");
    process.exit(1);
  }

  log(`\n💾 Создание коммита: "${commitMessage}"...`, "blue");
  try {
    exec(`git commit -m "${commitMessage}"`);
    log("✅ Коммит успешно создан!", "green");

    log("\n📤 Следующий шаг: git push", "blue");
  } catch (error) {
    log("❌ Ошибка при создании коммита", "red");
    process.exit(1);
  }
}

main().catch((error) => {
  log(`\n❌ Ошибка: ${error.message}`, "red");
  process.exit(1);
});
