import { expect, test } from "vitest";
import { matchSingleLineSpecialBlock } from "./matchSingleLineSpecialBlock";

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
      <p>{#video VIDEO_ID}</p>
      <p>Paragraphe 2</p>
    `;
  const outputHtml = matchSingleLineSpecialBlock(inputHtml, {
    video: (videoId: string) => `<iframe 
        src="https://www.youtube.com/embed/${videoId}" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>`,
  });
  expect(outputHtml).toBe(`
      <p>Paragraphe 1</p>
      <iframe 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>
      <p>Paragraphe 2</p>
    `);
});
