import type { PDFDocumentProxy } from "pdfjs-dist";

const THUMBNAIL_WIDTH = 256;
const PREVIEW_WIDTH = 960;

type PdfjsModule = typeof import("pdfjs-dist");

let pdfjsPromise: Promise<PdfjsModule> | null = null;

async function loadPdfjs(): Promise<PdfjsModule> {
  if (!pdfjsPromise) {
    pdfjsPromise = (async () => {
      const pdfjs = await import("pdfjs-dist");

      if (!pdfjs.GlobalWorkerOptions.workerSrc) {
        const worker = await import("pdfjs-dist/build/pdf.worker.min.mjs?url");
        pdfjs.GlobalWorkerOptions.workerSrc = worker.default;
      }

      return pdfjs;
    })();
  }

  return pdfjsPromise;
}

async function withPdfDocument<T>(
  source: File | string,
  fn: (pdf: PDFDocumentProxy) => Promise<T>
): Promise<T> {
  const pdfjs = await loadPdfjs();
  const loadingTask = pdfjs.getDocument(
    typeof source === "string"
      ? { url: source }
      : { data: new Uint8Array(await source.arrayBuffer()) }
  );

  try {
    const pdf = await loadingTask.promise;
    try {
      return await fn(pdf);
    } finally {
      await pdf.cleanup();
    }
  } finally {
    await loadingTask.destroy();
  }
}

async function renderPageToDataUrl(
  pdf: PDFDocumentProxy,
  pageNumber: number,
  targetWidth: number
): Promise<string> {
  const page = await pdf.getPage(pageNumber);
  const unscaled = page.getViewport({ scale: 1 });
  const viewport = page.getViewport({ scale: targetWidth / unscaled.width });
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (!context) {
    throw new Error("Canvas context unavailable");
  }

  canvas.width = viewport.width;
  canvas.height = viewport.height;
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);

  await page.render({
    canvas,
    viewport,
    background: "#ffffff",
  }).promise;

  return canvas.toDataURL("image/jpeg", 0.85);
}

export async function getPdfThumbnail(file: File): Promise<string> {
  return withPdfDocument(file, (pdf) =>
    renderPageToDataUrl(pdf, 1, THUMBNAIL_WIDTH)
  );
}

export async function getPdfPagePreviews(
  file?: File,
  src?: string | null,
  width = PREVIEW_WIDTH
): Promise<string[]> {
  const source = file ?? src;
  if (!source) return [];

  return withPdfDocument(source, async (pdf) => {
    const pages: string[] = [];

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      pages.push(await renderPageToDataUrl(pdf, pageNumber, width));
    }

    return pages;
  });
}
