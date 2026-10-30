export function rotatePhotoSrc(src: string, delta: number): Promise<string> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      try {
        const angle = ((delta % 360) + 360) % 360;
        const quarterTurn = angle === 90 || angle === 270;
        const canvas = document.createElement("canvas");
        canvas.width = quarterTurn ? image.naturalHeight : image.naturalWidth;
        canvas.height = quarterTurn ? image.naturalWidth : image.naturalHeight;
        const context = canvas.getContext("2d");
        if (!context) {
          reject(new Error("canvas"));
          return;
        }
        context.translate(canvas.width / 2, canvas.height / 2);
        context.rotate((angle * Math.PI) / 180);
        context.drawImage(
          image,
          -image.naturalWidth / 2,
          -image.naturalHeight / 2
        );
        canvas.toBlob((blob) => {
          if (!blob) {
            reject(new Error("blob"));
            return;
          }
          resolve(URL.createObjectURL(blob));
        }, "image/png");
      } catch (error) {
        reject(error instanceof Error ? error : new Error("canvas"));
      }
    };
    image.onerror = () => reject(new Error("image"));
    image.src = src;
  });
}
