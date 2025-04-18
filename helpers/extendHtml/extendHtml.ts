import { groupFollowingLinksToButtonList } from "./groupFollowingLinksToButtonList";
import { lazyLoadImg } from "./lazyLoadImg";
import { matchMultipleLinesSpecialBlocks } from "./matchMultipleLinesSpecialBlocks";
import { matchSingleLineSpecialBlock } from "./matchSingleLineSpecialBlock";
import { singleLinkToButton } from "./singleLinkToButton";
import { thumbnailFirst } from "./thumbnailFirst";

export function extendHtml(
  html: string,
  specialBlocks?: { [key: string]: (...args: string[]) => string }
): string {
  html = thumbnailFirst(html);
  html = lazyLoadImg(html);
  html = singleLinkToButton(html);
  html = groupFollowingLinksToButtonList(html);
  if (specialBlocks) {
    html = matchMultipleLinesSpecialBlocks(html, specialBlocks);
    html = matchSingleLineSpecialBlock(html, specialBlocks);
  }
  return html;
}
