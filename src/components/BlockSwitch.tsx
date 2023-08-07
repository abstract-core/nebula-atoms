import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import React, { ReactElement } from "react";
import { ExtendedBlockObjectResponse } from "../types/ExtendedBlockObjectResponse";
import { GlobalContext } from "../types/GlobalContext";
import BulletedListBlock from "./blocks/BulletedListBlock";
import CalloutBlock from "./blocks/CalloutBlock";
import HeadingThreeBlock from "./blocks/HeadingThreeBlock";
import HeadingTwoBlock from "./blocks/HeadingTwoBlock";
import ImageBlock from "./blocks/ImageBlock";
import NumberedListBlock from "./blocks/NumberedListBlock";
import ParagraphBlock from "./blocks/ParagraphBlock";
import QuoteBlock from "./blocks/QuoteBlock";
import ResizedImage from "./blocks/ResizedImage";
import VideoBlock from "./blocks/VideoBlock";
import SpecialBlockSwitch from "./SpecialBlockSwitch";

type BlockSwitchProps = GlobalContext & {
  block: ExtendedBlockObjectResponse;
} & { staticBlocks?: { [key: string]: ReactElement } };

export default function BlockSwitch({
  block,
  contents,
  staticBlocks = {},
}: BlockSwitchProps) {
  switch (block.type) {
    case "paragraph":
      if (block.paragraph.rich_text[0]?.plain_text.startsWith("[")) {
        const key = block.paragraph.rich_text[0].plain_text.slice(1, -1);
        return staticBlocks[key] || <></>;
      } else if (block.paragraph.rich_text[0]?.plain_text.startsWith("{")) {
        return <SpecialBlockSwitch block={block} contents={contents} />;
      } else {
        return (
          <ParagraphBlock
            key={block.id}
            richTexts={block.paragraph.rich_text as TextRichTextItemResponse[]}
          />
        );
      }
    case "image":
      return <ImageBlock block={block} />;
    case "resized_image":
      return <ResizedImage block={block} />;
    case "video":
      return <VideoBlock block={block} />;
    case "heading_2":
      return <HeadingTwoBlock block={block} />;
    case "heading_3":
      return <HeadingThreeBlock block={block} />;
    case "callout":
      return <CalloutBlock block={block} />;
    case "quote":
      return <QuoteBlock block={block} />;
    case "bulleted_list":
      return <BulletedListBlock block={block} />;
    case "numbered_list":
      return <NumberedListBlock block={block} />;
    default:
      return <></>;
  }
}
