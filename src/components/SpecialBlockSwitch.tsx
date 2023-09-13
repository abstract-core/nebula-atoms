import { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import React from "react";
import { ExtendedBlockObjectResponse } from "../types/ExtendedBlockObjectResponse";
import { GlobalContext } from "../types/GlobalContext";
import ContentsList from "./blocks/ContentsList";
import ParagraphBlock from "./blocks/ParagraphBlock";

type SpecialBlockSwitchProps = GlobalContext & {
  block: ExtendedBlockObjectResponse;
};

export default function SpecialBlockSwitch({
  block,
  contents,
}: SpecialBlockSwitchProps) {
  if (block.type === "paragraph") {
    const tag = block.paragraph.rich_text[0].plain_text
      .split("{")[1]
      .split("}")[0];
    if (tag.startsWith("liste-contenu")) {
      const contentListParams = tag.split(" ");
      if (contentListParams.length === 1) {
        return <ContentsList contents={contents} />;
      } else {
        return (
          <ContentsList
            contents={contents}
            contentType={contentListParams[1]}
          />
        );
      }
    } else if (tag.startsWith("contact")) {
      const contactParams = tag.split(" ");
      return (
        <div className="calls-to-action">
          <button
            type="button"
            className={`btn btn-primary contact-${contactParams[1]} mb-4`}
          >
            Afficher
            {contactParams[1] === "mail"
              ? " l'adresse mail"
              : contactParams[1] === "phone"
              ? " le numéro de téléphone"
              : ""}
          </button>
        </div>
      );
    }
    return (
      <ParagraphBlock
        key={block.id}
        richTexts={block.paragraph.rich_text as TextRichTextItemResponse[]}
      />
    );
  }
  return <></>;
}
