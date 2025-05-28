export function videoTransformer(src: string) {
  return `<video src="${src}" controls preload="none"></video>`;
}
