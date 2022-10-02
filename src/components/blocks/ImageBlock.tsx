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
      {block.image.type === "external" ? (
        <img src={block.image.external.url} className={className} />
      ) : (
        <img src={block.image.file.url} className={className} />
      )}
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
