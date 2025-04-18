import { expect, test } from "vitest";
import { carouselTransformer } from "./carouselTransformer";

test("should transform paragraph-wrapped images into a carousel", () => {
  const inputHtml = `
    <p><img src="image1.jpg"/></p>
    <p><img src="image2.jpg"/></p>
  `;
  const expectedOutput = `
    <div class="carousel">
      <button>&lt</button>
      <img src="image1.jpg"/>
      <img src="image2.jpg"/>
      <button>&gt</button>
    </div>
  `;
  const result = carouselTransformer(inputHtml);
  expect(result.replace(/\s+/g, "")).toBe(expectedOutput.replace(/\s+/g, ""));
});
