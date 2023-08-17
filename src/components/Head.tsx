import React from "react";

export type HeadProps = {
  title: string;
  favicon?: string;
  description?: string;
  /**
   * If set, includes
   *  `<meta name="robots" content="noindex" />`.
   */
  noIndex?: true;
};

export default function Head({
  pageContext: {
    head: { title, favicon, description, noIndex },
  },
}: {
  pageContext: { head: HeadProps };
}) {
  return (
    <>
      <title>{title}</title>
      {favicon && <link rel="icon" type="image/svg" href={favicon} />}
      {description && <meta name="description" content={description} />}
      {noIndex && <meta name="robots" content="noindex" />}
    </>
  );
}
