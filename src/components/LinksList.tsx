import { Link } from "gatsby";
import React from "react";
import { Link as LinkType } from "../types/Link";

export default function LinksList({ links }: { links: LinkType[] }) {
  return (
    <ul className="links-list">
      {links.map(({ url, label }) => (
        <li key={url}>
          <Link to={url}>{label}</Link>
        </li>
      ))}
    </ul>
  );
}
