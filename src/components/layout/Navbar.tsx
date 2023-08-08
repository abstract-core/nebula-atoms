import { Link } from "gatsby";
import * as React from "react";
import { LinkContent } from "../../types/LinkContent";

export type NavbarProps = {
  title: string;
  links: LinkContent[];
  bg: string;
  text: string;
  expand?: "sm" | "md" | "lg" | "xl" | "xxl";
};

function Navbar({ title, links, bg, text, expand }: NavbarProps) {
  return (
    <nav
      className={`navbar${
        expand ? ` navbar-expand-${expand}` : ""
      } position-fixed w-100 bg-${bg}`}
      style={{ zIndex: 1 }}
    >
      <div className="container-fluid d-flex align-items-center px-3">
        <Link className={`navbar-brand text-${text}`} to="/">
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
        <div
          className={`collapse${expand ? " navbar-collapse" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-lg-0 w-100 justify-content-end">
            {links.map(({ title, path }, index) => {
              return (
                <li key={index} className="nav-item">
                  <Link
                    key={index}
                    className={`nav-link text-${text}`}
                    to={path}
                  >
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
