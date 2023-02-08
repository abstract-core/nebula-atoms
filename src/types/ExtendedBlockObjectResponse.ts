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

export type ResizedImageBlockObject = {
  id: string;
  type: "resized_image";
  minUrl: string;
  medUrl?: string;
  maxUrl?: string;
};

/**
 * Not all types are available in `BlockSwitch`.
 *
 * @note `ImageBlockObjectResponse` should not be available
 *  because, thanks to `nebula-genesis`, they should be
 *  transformed to `ResizedImageBlockObject`.
 */
export type ExtendedBlockObjectResponse =
  | BlockObjectResponse
  | ResizedImageBlockObject
  | BulletedListBlockObject
  | NumberedListBlockObject;
