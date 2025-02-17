import { expect, test } from "vitest";
import { stringToUrl } from "./stringToUrl";

test("transform a string with special character to an url", () => {
  expect(stringToUrl("Les opérations d'attention, sans pitié : non")).toBe(
    "les-operations-d-attention-sans-pitie-non"
  );
});
