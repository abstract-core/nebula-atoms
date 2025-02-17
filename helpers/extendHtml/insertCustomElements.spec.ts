import { expect, test } from "vitest";
import { insertCustomElements } from "./insertCustomElements";

test("replace <p>{key}</p> with given element", () => {
  expect(
    insertCustomElements(
      '<div id="content"><h1>Titre</h1><p>{liste-test}</p></div>',
      [["liste-test", '<ul id="liste-test"><li>1</li><li>2</li></ul>']]
    )
  ).toBe(
    '<div id="content"><h1>Titre</h1><ul id="liste-test"><li>1</li><li>2</li></ul></div>'
  );
});
