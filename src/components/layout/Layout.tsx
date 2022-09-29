import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import Footer, { FooterProps } from "./Footer";
import Navbar, { NavbarProps } from "./Navbar";

export type LayoutHead = {
  /**
   * Only the page title;
   *  site title will be added for a final shape of
   *  `{title} - {process.env.WEBSITE_TITLE}`.
   */
  title: string;
  description?: string;
  /**
   * If set, includes
   *  `<meta name="robots" content="noindex" />`.
   */
  noIndex?: true;
};

type LayoutProps = {
  head: LayoutHead;
  navbar: NavbarProps;
  children: ReactElement;
  footer: FooterProps;
};

function Layout({ head, navbar, children, footer }: LayoutProps) {
  return (
    <div className="bg-deep text-light">
      <Helmet>
        <title>
          {head?.title ? `${head.title} - ` : ""}
          {process.env.WEBSITE_TITLE}
        </title>
        {head?.description && (
          <meta name="description" content={head.description} />
        )}
        {head?.noIndex && <meta name="robots" content="noindex" />}
        <script src="/script.js" defer={true}></script>
      </Helmet>
      <Navbar {...navbar} />
      <div id="main" className="container px-0 pb-5">
        {children}
      </div>
      <Footer {...footer} />
    </div>
  );
}

export default Layout;
