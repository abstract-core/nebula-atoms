import {
  ImageBlockObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import RichTextRenderer from "../RichTextRenderer";

export default function ImageBlock({
  block,
}: {
  block: ImageBlockObjectResponse;
}) {
  const className = "figure-img mt-5 mb-4";
  return (
    <figure className="figure">
      <img
        src={
          block.image.type === "external"
            ? block.image.external.url
            : block.image.file.url
        }
        alt={block.image.caption?.[0]?.plain_text || ""}
        className={className}
        loading="lazy"
      />
      {block.image.caption && (
        <figcaption className="figure-caption small">
          <RichTextRenderer
            richTexts={block.image.caption as TextRichTextItemResponse[]}
          />
        </figcaption>
      )}
    </figure>
  );
}
