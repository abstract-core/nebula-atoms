# Nebula atoms

`nebula-atoms` is part of the Nebula suite.

    Nebula connects Notion API and GatsbyJS to automatically create static websites.

Nebula Atoms provides a set of templates and components ready to integrate and display Notion content.

## Table of contents

- [Nebula atoms](#nebula-atoms)
  - [Table of contents](#table-of-contents)
  - [Projects' usage](#projects-usage)
    - [Templates](#templates)
      - [Setup](#setup)
      - [Different templates](#different-templates)
  - [Notion usage](#notion-usage)
    - [Extended blocks](#extended-blocks)
    - [Static blocks API](#static-blocks-api)
  - [Extend the package](#extend-the-package)
    - [Local development](#local-development)
  - [Build \& publish](#build--publish)

## Projects' usage

First, install package inside a site project from npm registry :

```sh
npm i nebula-atoms
```

### Templates

#### Setup

Templates must be imported in project and re-exported in order to customize them with specific contents and to provide custom SCSS.

Example :

```tsx
import "../styles/global.scss";
import { DefaultTemplate, Head } from "nebula-atoms";

export { Head };

export default DefaultTemplate;
```

#### Different templates

`nebula-atoms` offers three different templates :

- `default.template` is a basic template which must be provisioned with metadata and blocks content,
- `customizable.template` extends `default.template` by allowing a set of custom blocks to be added,
- `empty.template` sets metadata the same way than other templates but its content must be filled.

## Notion usage

### Extended blocks

### Static blocks API

## Extend the package

### Local development

Install `nebula-atoms` in local projet using :

```sh
npm uninstall nebula-atoms
npm i ../nebula-atoms
```

Don't forget to run the dev routine build with the following command :

```sh
npm run dev
```

## Build & publish

- Increase `package.json` version prop accordingly.
- Run the following :

```sh
npm run build
npm publish
```
