import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import { ExtendedBlockObjectResponse } from "../types/ExtendedBlockObjectResponse";
import { GlobalContext } from "../types/GlobalContext";
import ContentsList from "./blocks/ContentsList";
import ParagraphBlock from "./blocks/ParagraphBlock";

type SpecialBlockSwitchProps = GlobalContext & {
  block: ExtendedBlockObjectResponse;
};

export default function SpecialBlockSwitch({
  block,
  contents,
}: SpecialBlockSwitchProps) {
  if (block.type === "paragraph") {
    const tag = block.paragraph.rich_text[0].plain_text
      .split("{")[1]
      .split("}")[0];
    if (tag.startsWith("liste-contenu")) {
      const contentListParams = tag.split(" ");
      if (contentListParams.length === 1) {
        return <ContentsList contents={contents} />;
      } else {
        return (
          <ContentsList
            contents={contents}
            contentType={contentListParams[1]}
          />
        );
      }
    }
    return (
      <ParagraphBlock
        key={block.id}
        richTexts={block.paragraph.rich_text as TextRichTextItemResponse[]}
      />
    );
  }
  return <></>;
}
