import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import richTextToString from "../../helpers/richTextToString";
import titlePropToString from "../../helpers/titlePropToString";
import { GlobalContext } from "../../types/GlobalContext";

type ContentsListProps = GlobalContext & {
  contentType?: string;
};

export default function ContentsList({
  contents,
  contentType: _contentType,
}: ContentsListProps) {
  return contents ? (
    <div className="mt-4 mb-5">
      <>
        {(_contentType
          ? contents.filter((content) => {
              const contentType = content.properties["Type de contenu"];
              return (
                contentType.type === "select" &&
                contentType.select?.name === _contentType
              );
            })
          : contents
        ).map((content) => {
          const {
            ["Name"]: name,
            ["Url"]: url,
            ["Type de contenu"]: contentType,
          } = content.properties;
          return (
            <div key={content.id} className="mb-1">
              <a
                href={
                  url.type === "rich_text"
                    ? richTextToString(
                        url.rich_text as TextRichTextItemResponse[]
                      )
                    : content.id
                }
              >
                {contentType.type === "select" && (
                  <span className="badge rounded-pill bg-psik me-2">
                    {contentType.select?.name}
                  </span>
                )}
                {name.type === "title" && titlePropToString(name)}
              </a>
            </div>
          );
        })}
      </>
    </div>
  ) : (
    <></>
  );
}
