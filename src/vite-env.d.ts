/// <reference types="vite/client" />

declare module "*.css" {
  const url: string;
  export default url;
}

declare module "*.svg?raw" {
  const content: string;
  export default content;
}
