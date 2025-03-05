import { expect, test } from "vitest";
import { lazyLoadImg } from "./lazyLoadImg";

test("when an <img> is found, add the loadin=lazy attribute", () => {
  expect(
    lazyLoadImg(
      '<div id="content"><h1>Titre</h1><p><img src="/logo.svg" alt="Le logo de l\'organisation"/></p></div>'
    )
  ).toBe(
    '<div id="content"><h1>Titre</h1><p><img src="/logo.svg" alt="Le logo de l\'organisation" loading="lazy"/></p></div>'
  );
});
