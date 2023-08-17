import React, { ReactElement } from "react";
import Footer, { FooterProps } from "./Footer";
import Navbar, { NavbarProps } from "./Navbar";

type LayoutProps = {
  /** @deprecated Use Sass variables */
  bg?: string;
  /** @deprecated Use Sass variables */
  text?: string;
  navbar: NavbarProps;
  children: ReactElement;
  footer: FooterProps;
};

function Layout({ bg, text, navbar, children, footer }: LayoutProps) {
  return (
    <div className={`${bg ? `bg-${bg} ` : ""}${text ? `text-${text} ` : ""}`}>
      <Navbar {...navbar} title={navbar.title} />
      <div id="main" className="container pb-5">
        {children}
      </div>
      <Footer {...footer} />
    </div>
  );
}

export default Layout;
