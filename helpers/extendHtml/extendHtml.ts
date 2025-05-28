import { groupFollowingLinksToButtonList } from "./groupFollowingLinksToButtonList";
import { lazyLoadImg } from "./lazyLoadImg";
import { matchMultipleLinesSpecialBlocks } from "./matchMultipleLinesSpecialBlocks";
import { matchSingleLineSpecialBlock } from "./matchSingleLineSpecialBlock";
import { carouselTransformer } from "./multipleLinesSpecialBlocksTransformer/carouselTransformer";
import { linkTransformer } from "./singleLineSpecialBlocksTransformers/linkTransformer";
import { scriptTransformer } from "./singleLineSpecialBlocksTransformers/scriptTransformer";
import { videoTransformer } from "./singleLineSpecialBlocksTransformers/videoTransformer";
import { singleLinkToButton } from "./singleLinkToButton";
import { thumbnailFirst } from "./thumbnailFirst";

export function extendHtml(
  html: string,
  specialBlocks?: { [key: string]: (...args: string[]) => string },
  disable?: {
    thumbnailFirst?: boolean;
  }
): string {
  !disable?.thumbnailFirst && (html = thumbnailFirst(html));
  html = lazyLoadImg(html);
  html = singleLinkToButton(html);
  html = groupFollowingLinksToButtonList(html);
  specialBlocks = {
    carousel: carouselTransformer,
    link: linkTransformer,
    script: scriptTransformer,
    video: videoTransformer,
    ...specialBlocks,
  };
  html = matchMultipleLinesSpecialBlocks(html, specialBlocks);
  html = matchSingleLineSpecialBlock(html, specialBlocks);
  return html;
}
