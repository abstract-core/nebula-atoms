import React, { ReactElement } from "react";
import BlockSwitch from "../components/BlockSwitch";
import Layout from "../components/layout/Layout";
import { buildExtendedBlocks } from "../helpers/buildExtendedBlocks";
import { DefaultTemplateContext } from "./default.template";

export type CustomizableTemplateContext = Omit<
  DefaultTemplateContext,
  "createdAt" | "publishedAt" | "editedAt"
> & {
  staticBlocks?: { [key: string]: ReactElement };
};

const CustomizableTemplate = ({
  pageTitle,
  blocks,
  bg,
  text,
  navbar,
  contents,
  footer,
  staticBlocks = {},
}: CustomizableTemplateContext) => {
  const _blocks = buildExtendedBlocks(blocks);
  return (
    <Layout bg={bg} text={text} navbar={navbar} footer={footer}>
      <>
        <div id="page-header" className="mb-5">
          <h1>{pageTitle}</h1>
        </div>
        {_blocks.map((block) => (
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
