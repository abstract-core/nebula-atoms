export function insertCustomElements(
  html: string,
  customElements?: [key: string, html: string][]
) {
  if (!customElements || !customElements.length) return html;

  customElements.forEach(([key, element]) => {
    const regex = new RegExp(`<p>{${key}}</p>`, "g");
    html = html.replace(regex, element);
  });

  return html;
}
