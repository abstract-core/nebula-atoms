import React from "react";
import {
  CalloutBlockObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import RichTextRenderer from "../RichTextRenderer";

export default function CalloutBlock({
  block,
}: {
  block: CalloutBlockObjectResponse;
}) {
  return (
    <div className="callout-block d-flex p-4 mt-4 mb-3 rounded">
      {block.callout.icon?.type === "emoji" && (
        <span className="me-3">{block.callout.icon.emoji}</span>
      )}
      <div>
        <RichTextRenderer
          richTexts={block.callout.rich_text as TextRichTextItemResponse[]}
        />
      </div>
    </div>
  );
}
