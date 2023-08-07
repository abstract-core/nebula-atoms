import React, { ReactElement } from "react";
import BlockSwitch from "../components/BlockSwitch";
import Layout from "../components/layout/Layout";
import { DefaultTemplateContext } from "./default.template";

export type CustomizableTemplateContext = Omit<
  DefaultTemplateContext,
  "createdAt" | "publishedAt" | "editedAt"
> & {
  staticBlocks?: { [key: string]: ReactElement };
};

const CustomizableTemplate = ({
  title,
  blocks,
  head,
  bg,
  text,
  navbar,
  contents,
  footer,
  staticBlocks = {},
}: CustomizableTemplateContext) => {
  return (
    <Layout
      head={{ title, ...(head || {}) }}
      bg={bg}
      text={text}
      navbar={navbar}
      footer={footer}
    >
      <>
        <div id="page-header" className="mb-5">
          <h1>{title}</h1>
        </div>
        {blocks.map((block) => (
          <BlockSwitch
            key={block.id}
            block={block}
            contents={contents}
            staticBlocks={staticBlocks}
          />
        ))}
      </>
    </Layout>
  );
};

export default CustomizableTemplate;
