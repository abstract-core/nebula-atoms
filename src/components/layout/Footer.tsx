import * as React from "react";
import { Link } from "gatsby";
import { LinkContent } from "../../types/LinkContent";

export type FooterProps = {
  links: LinkContent[];
  bg: string;
  text: string;
  a: string;
};

function Footer({ links, bg, text, a }: FooterProps) {
  return (
    <footer className={`bg-${bg} text-${text}`}>
      <div className="d-flex justify-content-center flex-md-row flex-column text-white">
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
          <li className="py-2">
            Site développé par Romaric Ruga{" "}
            <a href="https://rimarok.com/" className={`text-${a}`}>
              (freelance ingénierie web et éco-conception)
            </a>
            .
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
