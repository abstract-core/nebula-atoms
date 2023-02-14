import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import Footer, { FooterProps } from "./Footer";
import Navbar, { NavbarProps } from "./Navbar";
import RGDPBanner from "./RGDPBanner";
import { AvailableTiers } from "../../templates/default.template";

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
  bg: string;
  text: string;
  navbar: NavbarProps;
  children: ReactElement;
  footer: FooterProps;
  activatedTiers: AvailableTiers[];
};

function Layout({
  head,
  bg,
  text,
  navbar,
  children,
  footer,
  activatedTiers,
}: LayoutProps) {
  return (
    <div className={`bg-${bg} text-${text}`}>
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
      <div id="main" className="container pb-5">
        {children}
      </div>
      <Footer {...footer} />
      <RGDPBanner activatedTiers={activatedTiers} />
    </div>
  );
}

export default Layout;
