import { expect, test } from "vitest";
import { linkTransformer } from "./linkTransformer";

test("should transform CSS href into link element", () => {
  const href = "./styles.css";
  const expectedOutput = `<link href="./styles.css" rel="stylesheet" type="text/css">`;
  const result = linkTransformer(href);
  expect(result).toBe(expectedOutput);
});
