import { groupFollowingLinksToButtonList } from "./groupFollowingLinksToButtonList";
import { insertCustomElements } from "./insertCustomElements";
import { singleLinkToButton } from "./singleLinkToButton";
import { thumbnailFirst } from "./thumbnailFirst";

export function extendHtml(
  html: string,
  customElements?: [key: string, html: string][]
): string {
  html = thumbnailFirst(html);
  html = singleLinkToButton(html);
  html = groupFollowingLinksToButtonList(html);
  if (customElements) html = insertCustomElements(html, customElements);
  return html;
}
