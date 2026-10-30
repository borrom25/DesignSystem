import assert from "node:assert/strict";
import fs from "node:fs";
import ts from "typescript";

// Exercise the shared file rules without DOM, file pickers or real uploads.
const source = fs.readFileSync(new URL("../src/utils/uploadValidation.ts", import.meta.url), "utf8");
const { outputText } = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } });
const { processUploadFiles, isFileAccepted } = await import(`data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`);
const small = new File(["12345678"], "photo.PNG", { type: "image/png" });
const large = new File(["123456789"], "large.png", { type: "image/png" });
const text = new File(["test"], "notes.txt", { type: "text/plain" });
const errors = [];
const onValidationError = (error) => errors.push(error);

assert.equal(isFileAccepted(small, "image/*"), true);
assert.equal(isFileAccepted(small, ".png,.jpg"), true);
assert.equal(isFileAccepted(text, "image/*"), false);
assert.deepEqual(processUploadFiles([small], { maxSize: 8 }), [small]);
assert.deepEqual(processUploadFiles([large], { maxSize: 8, onValidationError }), []);
assert.equal(errors.pop().code, "max-size");
assert.deepEqual(processUploadFiles([text], { maxSize: 8, accept: "image/*", onValidationError }), []);
assert.equal(errors.pop().code, "accept");
assert.deepEqual(processUploadFiles([small], { maxSize: 8, validateFile: () => "Отклонено приложением", onValidationError }), []);
assert.equal(errors.pop().message, "Отклонено приложением");
assert.deepEqual(processUploadFiles([small, text], { maxSize: 8 }), [small]);
assert.deepEqual(processUploadFiles([text], { maxSize: 8, multiple: true, maxFiles: 1, existingFiles: [small], currentFileCount: 1, onValidationError }), [small]);
assert.equal(errors.pop().code, "max-files");
console.log("Upload validation: MIME, extension, exact size boundary, rejected size/type/custom result, single file and accumulated limit passed.");
