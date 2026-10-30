export async function fallbackCopyText(value: string) {
  const textArea = document.createElement("textarea");
  textArea.value = value;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();

  const isCopied = document.execCommand("copy");
  document.body.removeChild(textArea);

  if (!isCopied) {
    throw new Error("Copy command is unavailable");
  }
}

export async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  await fallbackCopyText(value);
}
