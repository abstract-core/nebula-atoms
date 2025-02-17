import { expect, test } from "vitest";
import { groupFollowingLinksToButtonList } from "./groupFollowingLinksToButtonList";

test('only multiple <p><a class="btn"></a></p> returns a <div class="btn-list"><a></a><a></a></div>', () => {
  expect(
    groupFollowingLinksToButtonList(
      '<div id="content"><h1>Titre</h1><p><a class="btn" href="rimarok.fr">Voir plus</a></p><p><a class="btn" href="rimarok.fr/prestations">Prestations</a></p><p>Salut</p><p><a class="btn" href="https://imrok.fr">yay !</a></p></div>'
    )
  ).toBe(
    '<div id="content"><h1>Titre</h1><div class="btn-list"><a href="rimarok.fr">Voir plus</a><a href="rimarok.fr/prestations">Prestations</a></div><p>Salut</p><p><a class="btn" href="https://imrok.fr">yay !</a></p></div>'
  );
});
