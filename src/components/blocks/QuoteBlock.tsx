import React from "react";
import {
  QuoteBlockObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import RichTextRenderer from "../RichTextRenderer";

export default function QuoteBlock({
  block,
}: {
  block: QuoteBlockObjectResponse;
}) {
  return (
    <blockquote className="blockquote d-flex p-4 mt-4 mb-3 rounded">
      <RichTextRenderer
        richTexts={block.quote.rich_text as TextRichTextItemResponse[]}
      />
    </blockquote>
  );
}
