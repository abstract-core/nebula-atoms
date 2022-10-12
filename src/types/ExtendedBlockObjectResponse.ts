import {
  BlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type BulletedListBlockObject = {
  id: string;
  type: "bulleted_list";
  items: BulletedListItemBlockObjectResponse[];
};

export type NumberedListBlockObject = {
  id: string;
  type: "numbered_list";
  items: NumberedListItemBlockObjectResponse[];
};

export type ExtendedBlockObjectResponse =
  | BlockObjectResponse
  | BulletedListBlockObject
  | NumberedListBlockObject;
