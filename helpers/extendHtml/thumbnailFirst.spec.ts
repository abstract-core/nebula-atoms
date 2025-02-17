import { expect, test } from "vitest";
import { thumbnailFirst } from "./thumbnailFirst";

test("if a <p><img/></p> directly follow <h1></h1>, reverse their order", () => {
  expect(
    thumbnailFirst(
      '<div id="content"><h1>Titre</h1><p><img src="./test.png"></p></div>'
    )
  ).toBe(
    '<div id="content"><p><img src="./test.png"></p>\n<h1>Titre</h1></div>'
  );
  expect(
    thumbnailFirst(
      '<h1 id="accueil-accueillant">Accueil accueillant</h1>\n<p><img src="/home-illustration.svg" alt="[object Object]"></p>\n<p>Salut ! Je m’appelle Romaric Ruga et vous êtes sur mon  <strong>site créatif</strong> .</p>'
    )
  ).toBe(
    '<p><img src="/home-illustration.svg" alt="[object Object]"></p>\n<h1 id="accueil-accueillant">Accueil accueillant</h1>\n<p>Salut ! Je m’appelle Romaric Ruga et vous êtes sur mon  <strong>site créatif</strong> .</p>'
  );
});
