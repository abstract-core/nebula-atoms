export function groupFollowingLinksToButtonList(html: string): string {
  return html.replace(
    /(<p><a class="btn" href="[^"]+">[^<]+<\/a><\/p>\s*){2,}/g,
    (match) => {
      const links = match
        .match(/<a class="btn" href="[^"]+">[^<]+<\/a>/g)
        ?.map((link) => link.replace(' class="btn"', ""));
      return `<div class="btn-list">${links?.join("")}</div>`;
    }
  );
}
