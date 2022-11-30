import React from "react";
import { ExtendedBlockObjectResponse } from "../types/ExtendedBlockObjectResponse";
import PureBlockSwitch from "./PureBlockSwitch";

export default function PureBlocksRenderer({
  blocks,
}: {
  blocks: ExtendedBlockObjectResponse[];
}) {
  return (
    <>
      {blocks.map((block) => (
        <PureBlockSwitch key={block.id} block={block} />
      ))}
    </>
  );
}
