import * as React from "react";
import { Link } from "gatsby";
import { LinkContent } from "../../types/LinkContent";

export type FooterProps = {
  links: LinkContent[];
  /** @deprecated Use Sass variables */
  bg?: string;
  /** @deprecated Use Sass variables */
  text?: string;
  /** @deprecated Use Sass variables */
  a?: string;
  contact?: true;
  mentions?: true;
};

function Footer({ links, bg, text, a, contact, mentions }: FooterProps) {
  return (
    <footer
      className={`${bg ? `bg-${bg} ` : ""}${text ? `text-${text} ` : ""}`}
    >
      <div className="d-flex justify-content-center flex-md-row flex-column">
        <ul className="list-unstyled p-5 col-sm-12 col-md-6 col-xl-4">
          {links.map(({ title, path }, index) => {
            return (
              <li className="py-1" key={index}>
                <Link className={`pb-2 text-${a}`} to={path}>
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="list-unstyled p-5 col-sm-12 col-md-6 col-xl-4">
          <li className="h3 py-2">{process.env.WEBSITE_TITLE}</li>
          {contact && (
            <li>
              <a href="/contact" className={`${a ? `text-${a} ` : ""}`}>
                Contact
              </a>
            </li>
          )}
          {mentions && (
            <li>
              <a
                href="/mentions-legales"
                className={`${a ? `text-${a} ` : ""}`}
              >
                Mentions légales
              </a>
            </li>
          )}
          <li className="py-2">
            Site développé par{" "}
            <a
              href="https://rimarok.com/"
              className={`${a ? `text-${a} ` : ""}`}
            >
              RIMAROK.com
            </a>{" "}
            (freelance ingénierie web et éco-conception).
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
