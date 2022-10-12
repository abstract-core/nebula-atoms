import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import { NumberedListBlockObject } from "../../types/ExtendedBlockObjectResponse";
import RichTextRenderer from "../RichTextRenderer";

export default function NumberedListBlock({
  block,
}: {
  block: NumberedListBlockObject;
}) {
  return (
    <ol>
      {block.items.map(({ numbered_list_item }) => (
        <li>
          <RichTextRenderer
            richTexts={
              numbered_list_item.rich_text as TextRichTextItemResponse[]
            }
          />
        </li>
      ))}
    </ol>
  );
}
