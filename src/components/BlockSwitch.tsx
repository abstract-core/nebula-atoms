import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";
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
import VideoBlock from "./blocks/VideoBlock";
import SpecialBlockSwitch from "./SpecialBlockSwitch";

type BlockSwitchProps = GlobalContext & { block: ExtendedBlockObjectResponse };

export default function BlockSwitch({ block, contents }: BlockSwitchProps) {
  switch (block.type) {
    case "paragraph":
      if (
        block.paragraph.rich_text[0] &&
        block.paragraph.rich_text[0].plain_text.startsWith("{")
      ) {
        return (
          <SpecialBlockSwitch
            block={
              block.paragraph.rich_text[0].plain_text
                .split("{")[1]
                .split("}")[0]
            }
            contents={contents}
          />
        );
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
