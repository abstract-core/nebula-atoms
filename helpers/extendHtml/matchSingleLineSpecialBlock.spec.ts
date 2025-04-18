import { expect, test } from "vitest";
import { matchSingleLineSpecialBlock } from "./matchSingleLineSpecialBlock";
import { videoTransformer } from "./singleLineSpecialBlocksTransformers/videoTransformer";

test("should match special block with only name", () => {
  const inputHtml = `
      <p><img src="image1.jpg" alt=""/></p>
      <p>{#illustration}</p>
      <p><img src="image3.jpg" alt="une image"/></p>
    `;
  const outputHtml = matchSingleLineSpecialBlock(inputHtml, {
    illustration: () => '<img src="image2.jpg" alt="illustration"/>',
  });
  expect(outputHtml).toBe(`
      <p><img src="image1.jpg" alt=""/></p>
      <img src="image2.jpg" alt="illustration"/>
      <p><img src="image3.jpg" alt="une image"/></p>
    `);
});

test("should match special block with name and arguments", () => {
  const inputHtml = `
      <p>Paragraphe 1</p>
      <p>{#video VIDEO_PATH}</p>
      <p>Paragraphe 2</p>
    `;
  const outputHtml = matchSingleLineSpecialBlock(inputHtml, {
    video: videoTransformer,
  });
  expect(outputHtml).toBe(`
      <p>Paragraphe 1</p>
      <video src="VIDEO_PATH" controls></video>
      <p>Paragraphe 2</p>
    `);
});
