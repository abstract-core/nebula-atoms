import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import { BulletedListBlockObject } from "../../types/ExtendedBlockObjectResponse";
import RichTextRenderer from "../RichTextRenderer";

export default function BulletedListBlock({
  block,
}: {
  block: BulletedListBlockObject;
}) {
  return (
    <ul>
      {block.items.map(({ bulleted_list_item }) => (
        <li>
          <RichTextRenderer
            richTexts={
              bulleted_list_item.rich_text as TextRichTextItemResponse[]
            }
          />
        </li>
      ))}
    </ul>
  );
}
