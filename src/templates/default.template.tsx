import {
  BlockObjectResponse,
  ImageBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { PageProps, Script } from "gatsby";
import React from "react";
import ImageBlock from "../components/blocks/ImageBlock";
import BlockSwitch from "../components/BlockSwitch";
import { HeadProps } from "../components/Head";
import { FooterProps } from "../components/layout/Footer";
import Layout from "../components/layout/Layout";
import { NavbarProps } from "../components/layout/Navbar";
import { buildExtendedBlocks } from "../helpers/buildExtendedBlocks";
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
  blocks: BlockObjectResponse[];
  scripts?: string[];
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
    scripts,
  },
}: PageProps<undefined, DefaultTemplateContext>) => {
  const _blocks = buildExtendedBlocks(blocks);
  let thumbnail: ImageBlockObjectResponse | undefined;
  if (_blocks[0].type === "image") {
    thumbnail = _blocks.shift() as ImageBlockObjectResponse;
  }
  return (
    <Layout navbar={navbar} footer={footer}>
      <>
        {thumbnail && (
          <div id="thumbnail">
            <ImageBlock block={thumbnail} />
          </div>
        )}
        <div id="page-header" className="mb-5">
          <h1>{pageTitle}</h1>
        </div>
        <div id="page-dates">
          {createdAt && (
            <div>Créé le {new Date(createdAt).toLocaleDateString("fr")}</div>
          )}
          {publishedAt && (
            <div>
              Publié le {new Date(publishedAt).toLocaleDateString("fr")}
            </div>
          )}
          {editedAt && (
            <div>
              Mis à jour le {new Date(editedAt).toLocaleDateString("fr")}
            </div>
          )}
        </div>
        {_blocks.map((block) => (
          <BlockSwitch key={block.id} block={block} contents={contents} />
        ))}
        {/** @todo Add GDPR panel */}
        {scripts?.map((script) => (
          <Script key={script} src={script} />
        ))}
      </>
    </Layout>
  );
};

export default DefaultTemplate;
