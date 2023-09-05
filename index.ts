import DefaultTemplate from "./src/templates/default.template";
import type { DefaultTemplateContext } from "./src/templates/default.template";
import type {
  ExtendedBlockObjectResponse,
  ResizedImageBlockObject,
} from "./src/types/ExtendedBlockObjectResponse";
import RichTextRenderer from "./src/components/RichTextRenderer";
import { MultisizedImage } from "./src/types/MultisizedImage";
import CustomizableTemplate from "./src/templates/customizable.template";
import type { CustomizableTemplateContext } from "./src/templates/customizable.template";
import Head from "./src/components/Head";
import type { Link } from "./src/types/Link";
import LinksList from "./src/components/LinksList";
import type { PageAndBlocks } from "./src/types/PageAndBlocks";
import EmptyTemplate from "./src/templates/empty.template";
import type { EmptyTemplateContext } from "./src/templates/empty.template";
import { buildExtendedBlocks } from "./src/helpers/buildExtendedBlocks";
import BlockSwitch from "./src/components/BlockSwitch";

export {
  DefaultTemplate,
  DefaultTemplateContext,
  CustomizableTemplate,
  CustomizableTemplateContext,
  EmptyTemplate,
  EmptyTemplateContext,
  ExtendedBlockObjectResponse,
  MultisizedImage,
  ResizedImageBlockObject,
  Head,
  RichTextRenderer,
  BlockSwitch,
  Link,
  LinksList,
  PageAndBlocks,
  buildExtendedBlocks,
};
