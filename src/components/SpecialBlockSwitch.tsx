import React from "react";
import { GlobalContext } from "../types/GlobalContext";
import ContentsList from "./blocks/ContentsList";

type SpecialBlockSwitchProps = GlobalContext & {
  block: string;
};

export default function SpecialBlockSwitch({
  block,
  contents,
}: SpecialBlockSwitchProps) {
  if (block.startsWith("liste-contenu")) {
    const contentListParams = block.split(" ");
    if (contentListParams.length === 1) {
      return <ContentsList contents={contents} />;
    } else {
      return (
        <ContentsList contents={contents} contentType={contentListParams[1]} />
      );
    }
  }
  return <></>;
}
