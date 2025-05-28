export function scriptTransformer(src: string) {
  return `<script src="${src}" defer></script>`;
}
