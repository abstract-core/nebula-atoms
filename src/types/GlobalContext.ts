import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type GlobalContext = {
  contents?: Pick<PageObjectResponse, "id" | "properties">[];
};
