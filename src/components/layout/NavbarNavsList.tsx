import { Link } from "gatsby";
import React from "react";
import { LinkContent } from "../../types/LinkContent";

export default function NavbarNavsList({
  links,
  text,
}: {
  links: LinkContent[];
  text?: string;
}) {
  return (
    <ul className="navbar-nav me-auto mb-lg-0 w-100 justify-content-end">
      {links.map(({ title, path }, index) => {
        return (
          <li key={index} className="nav-item">
            <Link
              key={index}
              className={`nav-link${text ? ` text-${text}` : ""} p-2 p-md-0`}
              to={path}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
