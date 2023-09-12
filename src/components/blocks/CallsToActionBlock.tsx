import React from "react";
import { CallsToActionBlockObject } from "../../types/ExtendedBlockObjectResponse";

export default function CallsToActionBlock({
  block,
}: {
  block: CallsToActionBlockObject;
}) {
  return (
    <div className="calls-to-action">
      {block.items.map(({ href, plain_text }) => (
        <a key={href} href={href}>
          {plain_text}
        </a>
      ))}
    </div>
  );
}
