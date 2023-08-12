import { Link } from "gatsby";
import * as React from "react";
import { LinkContent } from "../../types/LinkContent";
import NavbarNavsList from "./NavbarNavsList";

export type NavbarProps = {
  title: string;
  links: LinkContent[];
  /** @deprecated Use Sass variables */
  bg?: string;
  /** @deprecated Use Sass variables */
  text?: string;
  expand?: "sm" | "md" | "lg" | "xl" | "xxl";
};

function Navbar({ title, links, bg, text, expand }: NavbarProps) {
  return (
    <nav
      className={`navbar${
        expand ? ` navbar-expand-${expand}` : ""
      } position-fixed w-100 ${bg ? `bg-${bg} ` : ""}`}
      style={{ zIndex: 1 }}
    >
      <div className="container-fluid d-flex align-items-center px-3 col-sm-12 col-md-8 col-xl-6">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        {expand && (
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        )}
        {expand ? (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavbarNavsList links={links} text={text} />
          </div>
        ) : (
          <NavbarNavsList links={links} text={text} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
