import {
  Heading3BlockObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import richTextToString from "../../helpers/richTextToString";
import { textToSlug } from "../../helpers/textToSlug";
import RichTextRenderer from "../RichTextRenderer";

export default function HeadingThreeBlock({
  block,
}: {
  block: Heading3BlockObjectResponse;
}) {
  const id = textToSlug(
    richTextToString(block.heading_3.rich_text as TextRichTextItemResponse[])
  );
  return (
    <h3 id={id} className="mt-4 mb-3">
      <RichTextRenderer
        richTexts={block.heading_3.rich_text as TextRichTextItemResponse[]}
      />
    </h3>
  );
}
