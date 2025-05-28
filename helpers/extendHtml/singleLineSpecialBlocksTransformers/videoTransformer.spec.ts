import { expect, test } from "vitest";
import { videoTransformer } from "./videoTransformer";

test("should transform video source into video element", () => {
  const src = "./process.mp4";
  const expectedOutput = `<video src="./process.mp4" controls preload="none"></video>`;
  const result = videoTransformer(src);
  expect(result).toBe(expectedOutput);
});
