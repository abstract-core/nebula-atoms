import {
  Heading3BlockObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import RichTextRenderer from "../RichTextRenderer";

export default function HeadingThreeBlock({
  block,
}: {
  block: Heading3BlockObjectResponse;
}) {
  const headingIds = block.heading_3.rich_text.map((text) => {
    return text.plain_text;
  });

  const convertedIds = headingIds
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .split(" ")
    .join("-")
    .replace(/[^a-z-]/g, "")
    .replace(/^\-?|\-?$/g, "");

  return (
    <h3 id={convertedIds} className="mt-4 mb-3">
      <RichTextRenderer
        richTexts={block.heading_3.rich_text as TextRichTextItemResponse[]}
      />
    </h3>
  );
}
