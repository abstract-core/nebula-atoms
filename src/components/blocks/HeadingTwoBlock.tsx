import {
  Heading2BlockObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import richTextToString from "../../helpers/richTextToString";
import { textToSlug } from "../../helpers/textToSlug";
import RichTextRenderer from "../RichTextRenderer";

export default function HeadingTwoBlock({
  block,
}: {
  block: Heading2BlockObjectResponse;
}) {
  const id = textToSlug(
    richTextToString(block.heading_2.rich_text as TextRichTextItemResponse[])
  );
  return (
    <h2 id={id} className="mt-5 mb-4">
      <RichTextRenderer
        richTexts={block.heading_2.rich_text as TextRichTextItemResponse[]}
      />
    </h2>
  );
}
