# Nebula atoms

`nebula-atoms` is part of the Nebula suite.

    Nebula connects Astro SSG to Notion API & GitHub Actions$$ to automatically create static websites.

Nebula Atoms provides a set of templates and components ready to integrate and display Notion content.

## Table of contents

- [Nebula atoms](#nebula-atoms)
  - [Table of contents](#table-of-contents)
  - [Quick start](#quick-start)
  - [Features](#features)
    - [Templates](#templates)
      - [`Layout`](#layout)
    - [Helpers](#helpers)
      - [extendHtml()](#extendhtml)
      - [`stringToUrl(string): string`](#stringtourlstring-string)
      - [`dateToString(date: Date): 'dd-mm-yyyy'`](#datetostringdate-date-dd-mm-yyyy)
    - [Core SCSS](#core-scss)
  - [Extend the package](#extend-the-package)
    - [Local development](#local-development)
  - [Build \& publish](#build--publish)

## Quick start

First, install package inside a site project from npm registry :

```sh
npm i nebula-atoms
```

## Features

### Templates

#### `Layout`

Generic layout with `<slot>` for `<body>` content, `<slot name="navbar">` & `<slot name="footbar">` (the left side menu, usually dedicated to sitemap).

### Helpers

#### extendHtml()

```typescript
extendHtml(
  html: string,
  specialBlocks?: { [key: string]: (...args: string[]) => string }
)
```

Add support for :

- **Thumbnail :** if image is page's first block, put it before h1,
- **Button-like links :** a block containing only a link, get the "btn" class,
- **Button-like links group :** multiple button-like links (block) are grouped in a single "btn-list" div
- **Special blocks :** replace block(s) containg `{#key ...args}` (single line) or `{#key}<></>...{#key}` (multiple line) text with string the transformer returned.

Automatically add : **img lazy loading**

#### `stringToUrl(string): string`

Transform a string to an url-ready one.

#### `dateToString(date: Date): 'dd-mm-yyyy'`

### Core SCSS

Some rules that can be applied on every sites.

Use it like that : `@use "../node_modules/nebula-atoms-astro/styles/core";`

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
