import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProps = {
  /** @todo Make it required */
  head?: {
    /**
     * Only the page title;
     *  site title will be added for a final shape of
     *  `{title} - {WEBSITE_DATA.TITLE}`.
     */
    title: string;
    description?: string;
    /**
     * If set, includes
     *  `<meta name="robots" content="noindex" />`.
     */
    noIndex?: true;
  };
  children: ReactElement;
};

function Layout({ head, children }: LayoutProps) {
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
      <Navbar />
      <div id="main" className="container px-0 pb-5">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
