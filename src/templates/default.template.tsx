import { PageProps } from "gatsby";
import React from "react";
import BlockSwitch from "../components/BlockSwitch";
import { FooterProps } from "../components/layout/Footer";
import Layout, { LayoutHead } from "../components/layout/Layout";
import { NavbarProps } from "../components/layout/Navbar";
import { ExtendedBlockObjectResponse } from "../types/ExtendedBlockObjectResponse";
import { GlobalContext } from "../types/GlobalContext";

export type AvailableTiers = "Youtube" | "Soundcloud";

export type DefaultTemplateContext = GlobalContext & {
  title: string;
  head?: Omit<LayoutHead, "title">;
  bg: string;
  text: string;
  navbar: NavbarProps;
  footer: FooterProps;
  createdAt?: Date;
  publishedAt?: Date;
  editedAt?: Date;
  blocks: ExtendedBlockObjectResponse[];
  activatedTiers: AvailableTiers[];
};

const DefaultTemplate = ({
  pageContext: {
    title,
    createdAt,
    publishedAt,
    editedAt,
    blocks,
    head,
    bg,
    text,
    navbar,
    contents,
    footer,
    activatedTiers,
  },
}: PageProps<undefined, DefaultTemplateContext>) => {
  return (
    <Layout
      head={{ title, ...(head || {}) }}
      bg={bg}
      text={text}
      navbar={navbar}
      footer={footer}
      activatedTiers={activatedTiers}
    >
      <>
        <div id="page-header" className="mb-5">
          <h1>{title}</h1>
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
      </>
    </Layout>
  );
};

export default DefaultTemplate;
