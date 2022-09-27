import { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { PageProps } from "gatsby";
import React from "react";
import BlockSwitch from "../components/BlockSwitch";
import Layout, { LayoutHead } from "../components/layout/Layout";
import { GlobalContext } from "../types/GlobalContext";

export type DefaultTemplateContext = GlobalContext & {
  title: string;
  head?: Omit<LayoutHead, "title">;
  date: Date;
  blocks: BlockObjectResponse[];
};

const DefaultTemplate = ({
  pageContext: { title, date, blocks, head, contents },
}: PageProps<undefined, DefaultTemplateContext>) => {
  return (
    <Layout head={{ title, ...(head || {}) }}>
      <>
        <div id="page-header" className="mb-5">
          <h1>{title}</h1>
        </div>
        {date && (
          <p>
            <>Créé le {new Date(date).toLocaleDateString("fr")}</>
          </p>
        )}
        {blocks.map((block) => (
          <BlockSwitch key={block.id} block={block} contents={contents} />
        ))}
      </>
    </Layout>
  );
};

export default DefaultTemplate;
