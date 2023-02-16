import {
  VideoBlockObjectResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import RichTextRenderer from "../RichTextRenderer";

export default function VideoBlock({
  block,
}: {
  block: VideoBlockObjectResponse;
}) {
  
  const clear = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <>
      {localStorage.getItem("gdpr-Youtube") === "true" && !null ? (
        <>
          {block.video.type === "external" ? (
            <iframe
              width="560"
              height="315"
              src={block.video.external.url.split("/watch?v=").join("/embed/")}
              title="YouTube video player"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <></>
          )}
          {block.video.caption && (
            <p className="small">
              <RichTextRenderer
                richTexts={block.video.caption as TextRichTextItemResponse[]}
              />
            </p>
          )}
        </>
      ) : (
        <div className="card border m-5 p-5">
          <div className="card-body w-100">
            <p className="card-text">Veuillez accepter les cookies.</p>
            <button onClick={clear}>RESET LOCAL STORAGE</button>
          </div>
        </div>
      )}
    </>
  );
}
