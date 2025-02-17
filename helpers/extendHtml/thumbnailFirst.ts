export function thumbnailFirst(html: string): string {
  return html.replace(
    /(<h1[\s\S]*?<\/h1>)[\s]*(<p><img[\s\S]*?<\/p>)/,
    "$2\n$1"
  );
}
