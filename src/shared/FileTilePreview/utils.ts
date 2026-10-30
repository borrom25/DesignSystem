export function isImageFile(file: File): boolean {
  return file.type.startsWith("image/");
}

export function isVideoFile(file: File): boolean {
  return file.type.startsWith("video/");
}

export function isAudioFile(file: File): boolean {
  return file.type.startsWith("audio/");
}

export function isPdfFile(file: File): boolean {
  return file.type === "application/pdf" || /\.pdf$/i.test(file.name);
}

export function getVideoThumbnail(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    const objectUrl = URL.createObjectURL(file);
    let settled = false;

    const cleanup = () => {
      video.removeAttribute("src");
      video.load();
      URL.revokeObjectURL(objectUrl);
    };

    const fail = (error?: unknown) => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(
        error instanceof Error
          ? error
          : new Error("Failed to create video thumbnail")
      );
    };

    const succeed = (dataUrl: string) => {
      if (settled) return;
      settled = true;
      cleanup();
      resolve(dataUrl);
    };

    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.crossOrigin = "anonymous";

    video.onerror = () => fail();

    const captureFrame = () => {
      try {
        const width = video.videoWidth;
        const height = video.videoHeight;

        if (!width || !height) {
          fail(new Error("Video has no dimensions"));
          return;
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");

        if (!ctx) {
          fail(new Error("Canvas context unavailable"));
          return;
        }

        ctx.drawImage(video, 0, 0, width, height);
        succeed(canvas.toDataURL("image/jpeg"));
      } catch (error) {
        fail(error);
      }
    };

    video.onloadeddata = () => {
      try {
        const seekTime = Math.min(0.1, video.duration || 0.1);
        if (Number.isFinite(seekTime) && seekTime > 0) {
          video.currentTime = seekTime;
        } else {
          captureFrame();
        }
      } catch (error) {
        fail(error);
      }
    };

    video.onseeked = () => captureFrame();

    video.src = objectUrl;
  });
}
