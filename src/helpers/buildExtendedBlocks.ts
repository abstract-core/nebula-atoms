import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import {
  BulletedListBlockObject,
  CallsToActionBlockObject,
  CallToAction,
  ExtendedBlockObjectResponse,
  NumberedListBlockObject,
} from "../types/ExtendedBlockObjectResponse";

export function buildExtendedBlocks(blocks: BlockObjectResponse[]) {
  return blocks.reduce((_blocks, block) => {
    const prevBlock = _blocks.pop();
    if (
      // Group bulleted lists' items in a single block
      block.type === "bulleted_list_item"
    ) {
      if (prevBlock?.type === "bulleted_list") {
        prevBlock.items.push(block);
        _blocks.push(prevBlock);
      } else {
        _blocks.push({
          id: Date.now().toString(),
          type: "bulleted_list",
          items: [block],
        } as BulletedListBlockObject);
      }
    } else if (block.type === "numbered_list_item") {
      if (prevBlock?.type === "numbered_list") {
        prevBlock.items.push(block);
        _blocks.push(prevBlock);
      } else {
        _blocks.push({
          id: Date.now().toString(),
          type: "numbered_list",
          items: [prevBlock, block],
        } as NumberedListBlockObject);
      }
    } else if (block.type === "paragraph") {
      if (
        block.paragraph.rich_text.length === 1 &&
        block.paragraph.rich_text[0].type === "text" &&
        block.paragraph.rich_text[0].text.link
      ) {
        const { content, link } = block.paragraph.rich_text[0].text;
        const callToAction: CallToAction = {
          href: link.url,
          plain_text: content,
        };
        if (prevBlock?.type === "calls-to-action") {
          prevBlock.items.push(callToAction);
          _blocks.push(prevBlock);
        } else {
          if (prevBlock) _blocks.push(prevBlock);
          _blocks.push({
            id: Date.now().toString(),
            type: "calls-to-action",
            items: [callToAction],
          } as CallsToActionBlockObject);
        }
      } else {
        if (prevBlock) {
          _blocks.push(prevBlock);
        }
        _blocks.push(block);
      }
    } else {
      if (prevBlock) {
        _blocks.push(prevBlock);
      }
      _blocks.push(block as ExtendedBlockObjectResponse);
    }
    return _blocks;
  }, [] as ExtendedBlockObjectResponse[]);
}
