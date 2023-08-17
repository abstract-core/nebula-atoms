import { PageProps } from "gatsby";
import React from "react";
import BlockSwitch from "../components/BlockSwitch";
import { HeadProps } from "../components/Head";
import { FooterProps } from "../components/layout/Footer";
import Layout from "../components/layout/Layout";
import { NavbarProps } from "../components/layout/Navbar";
import { ExtendedBlockObjectResponse } from "../types/ExtendedBlockObjectResponse";
import { GlobalContext } from "../types/GlobalContext";

export type DefaultTemplateContext = GlobalContext & {
  pageTitle: string;
  head: HeadProps;
  /** @deprecated Use Sass variables */
  bg?: string;
  /** @deprecated Use Sass variables */
  text?: string;
  navbar: NavbarProps;
  footer: FooterProps;
  createdAt?: Date;
  publishedAt?: Date;
  editedAt?: Date;
  blocks: ExtendedBlockObjectResponse[];
};

const DefaultTemplate = ({
  pageContext: {
    pageTitle,
    createdAt,
    publishedAt,
    editedAt,
    blocks,
    bg,
    text,
    navbar,
    contents,
    footer,
  },
}: PageProps<undefined, DefaultTemplateContext>) => {
  return (
    <Layout navbar={navbar} footer={footer}>
      <>
        <div id="page-header" className="mb-5">
          <h1>{pageTitle}</h1>
        </div>
        {createdAt && (
          <p>
            <>Créé le {new Date(createdAt).toLocaleDateString("fr")}</>
          </p>
        )}
        {publishedAt && (
          <p>
            <>Publié le {new Date(publishedAt).toLocaleDateString("fr")}</>
          </p>
        )}
        {editedAt && (
          <p>
            <>Édité le {new Date(editedAt).toLocaleDateString("fr")}</>
          </p>
        )}
        {blocks.map((block) => (
          <BlockSwitch key={block.id} block={block} contents={contents} />
        ))}
        {/** @todo Add GDPR panel */}
      </>
    </Layout>
  );
};

export default DefaultTemplate;
