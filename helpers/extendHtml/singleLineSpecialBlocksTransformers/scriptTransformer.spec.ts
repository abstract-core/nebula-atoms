import { expect, test } from "vitest";
import { scriptTransformer } from "./scriptTransformer";

test("should transform script source into script element", () => {
  const src = "./app.js";
  const expectedOutput = `<script src="./app.js" defer></script>`;
  const result = scriptTransformer(src);
  expect(result).toBe(expectedOutput);
});
