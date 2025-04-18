import { expect, test } from "vitest";
import { matchMultipleLinesSpecialBlocks } from "./matchMultipleLinesSpecialBlocks";
import { carouselTransformer } from "./multipleLinesSpecialBlocksTransformer/carouselTransformer";

test("should match multiple lines special blocks", () => {
  const inputHtml = `
  <h1>Le titre</h1>
  <p>Sorry not sorry</p>
  <p>{#carousel}</p>
  <p><img src="/image-1.png alt="légende" /></p>
  <p><img src="/image-2.png alt="texte alternatif" /></p>
  <p>{#carousel}</p>
  <p><img src="/image-3.png alt="" /></p>`;
  const outputHtml = `
  <h1>Le titre</h1>
  <p>Sorry not sorry</p>
  <div class="carousel">
  <button>&lt</button>
  <img src="/image-1.png alt="légende" />
  <img src="/image-2.png alt="texte alternatif" />
  <button>&gt</button>  
</div>
  <p><img src="/image-3.png alt="" /></p>`;
  expect(
    matchMultipleLinesSpecialBlocks(inputHtml, {
      carousel: carouselTransformer,
    })
  ).toBe(outputHtml);
});
