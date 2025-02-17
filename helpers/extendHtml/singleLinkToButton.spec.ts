import { test, expect } from "vitest";
import { singleLinkToButton } from "./singleLinkToButton";

test('when a <p> tag contains only a <a> tag, add a "btn" class', () => {
  expect(
    singleLinkToButton(
      '<div id="content"><h1>Titre</h1><p><a href="rimarok.fr">Voir plus</a></p><p>Salut</p><p><a href="https://imrok.fr">yay !</a></p></div>'
    )
  ).toBe(
    '<div id="content"><h1>Titre</h1><p><a class="btn" href="rimarok.fr">Voir plus</a></p><p>Salut</p><p><a class="btn" href="https://imrok.fr">yay !</a></p></div>'
  );
});
