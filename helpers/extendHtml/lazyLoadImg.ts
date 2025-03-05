export function lazyLoadImg(html: string) {
  return html.replace(
    /<img(?![^>]*loading=["']?lazy["']?)([^>]*)\/>/gi,
    (match, p1) => {
      return `<img${p1} loading="lazy"/>`;
    }
  );
}
