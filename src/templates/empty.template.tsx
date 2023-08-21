import React, { ReactNode } from "react";
import Layout from "../components/layout/Layout";
import { DefaultTemplateContext } from "./default.template";

export type EmptyTemplateContext = Omit<
  DefaultTemplateContext,
  "createdAt" | "publishedAt" | "editedAt" | "blocks" | "contents"
> & {
  children: ReactNode;
};

const EmptyTemplate = ({
  pageTitle,
  bg,
  text,
  navbar,
  footer,
  children,
}: EmptyTemplateContext) => {
  return (
    <Layout bg={bg} text={text} navbar={navbar} footer={footer}>
      <>
        <div id="page-header" className="mb-5">
          <h1>{pageTitle}</h1>
        </div>
        {children}
      </>
    </Layout>
  );
};

export default EmptyTemplate;
