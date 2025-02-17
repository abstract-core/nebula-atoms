export function singleLinkToButton(html: string): string {
  return html.replace(/<p>\s*(<a [^>]+>[^<]+<\/a>)\s*<\/p>/g, (match, p1) => {
    return `<p>${p1.replace("<a ", '<a class="btn" ')}</p>`;
  });
}
