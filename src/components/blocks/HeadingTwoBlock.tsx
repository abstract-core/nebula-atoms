import {
  Heading2BlockObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import RichTextRenderer from "../RichTextRenderer";

export default function HeadingTwoBlock({
  block,
}: {
  block: Heading2BlockObjectResponse;
}) {
  const headingIds = block.heading_2.rich_text.map((text) => {
    return text.plain_text;
  });

  const convertedIds = headingIds
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .split(" ")
    .join("-")
    .replace(/[^a-z-]/g, "")
    .replace(/^\-?|\-?$/g, "") 

  return (
    <h2 id={convertedIds} className="mt-5 mb-4">
      <RichTextRenderer
        richTexts={block.heading_2.rich_text as TextRichTextItemResponse[]}
      />
    </h2>
  );
}
