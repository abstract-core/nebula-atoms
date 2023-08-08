import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import Footer, { FooterProps } from "./Footer";
import Navbar, { NavbarProps } from "./Navbar";

export type LayoutHead = {
  title: string;
  favicon?: string;
  description?: string;
  /**
   * If set, includes
   *  `<meta name="robots" content="noindex" />`.
   */
  noIndex?: true;
};

type LayoutProps = {
  head: LayoutHead;
  bg: string;
  text: string;
  navbar: NavbarProps;
  children: ReactElement;
  footer: FooterProps;
};

function Layout({ head, bg, text, navbar, children, footer }: LayoutProps) {
  return (
    <div className={`bg-${bg} text-${text}`}>
      <Helmet>
        <title>{head.title}</title>
        {head?.favicon && (
          <link rel="icon" type="image/svg" href={head.favicon} />
        )}
        {head?.description && (
          <meta name="description" content={head.description} />
        )}
        {head?.noIndex && <meta name="robots" content="noindex" />}
        <script src="/script.js" defer={true}></script>
      </Helmet>
      <Navbar {...navbar} title={navbar.title} />
      <div id="main" className="container pb-5">
        {children}
      </div>
      <Footer {...footer} />
    </div>
  );
}

export default Layout;
