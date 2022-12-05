# @alkhipce/editorjs-react

[![](https://flat.badgen.net/npm/v/@alkhipce/editorjs-react?icon=npm)](https://www.npmjs.com/package/@alkhipce/editorjs-react)
[![](https://flat.badgen.net/github/stars/etozhealkhipce/editorjs-react)](https://github.com/etozhealkhipce/editorjs-react)
[![](https://flat.badgen.net/badge/demo/site/green)](https://editorjs-react.vercel.app/)

## Demo

#### https://editorjs-react.vercel.app/

## Installation

```shell
npm i @alkhipce/editorjs-react
```

## Usage

```javascript
// import Parser component or import certain component like this (available components list below)
import { Parser, Table } from '@alkhipce/editorjs-react';

const App = () => {
  return (
    <>
      <Parser data={EDITORJS_DATA} />
      <Table content={EDITORJS_DATA} withHeadings={false} />;
    </>
  );
};
```

## Available components

# Code

| Props | Description                        | Type   | Default |
| ----- | ---------------------------------- | ------ | ------- |
| code  | display code in preformatted style | string | -       |

# Delimiter

| Props | Description | Type | Default |
| ----- | ----------- | ---- | ------- |
| -     | -           | -    | -       |

# Header

| Props | Description        | Type         | Default |
| ----- | ------------------ | ------------ | ------- |
| level | heading text level | number (1-6) | 1       |
| text  | your text          | string       | -       |

# Image

| Props          | Description             | Type                           | Default |
| -------------- | ----------------------- | ------------------------------ | ------- |
| file           | contains image info     | object with field url: string; | -       |
| caption        | image caption           | string or undefined            | -       |
| withBorder     | add border around image | boolean or undefined           | false   |
| stretched      | stretch image           | boolean or undefined           | false   |
| withBackground | add image background    | boolean or undefined           | false   |

# List

| Props | Description                         | Type                            | Default     |
| ----- | ----------------------------------- | ------------------------------- | ----------- |
| items | list items                          | string array                    | []          |
| style | set ordered or unordered list style | 'ordered' or 'unordered' string | 'unordered' |

# Paragraph

| Props | Description | Type   | Default |
| ----- | ----------- | ------ | ------- |
| text  | your text   | string | -       |

# Quote

| Props     | Description         | Type                      | Default |
| --------- | ------------------- | ------------------------- | ------- |
| text      | your text           | string                    | -       |
| caption   | quote caption       | string                    | -       |
| alignment | set quote alignment | 'left' or 'center' string | 'left'  |

# RawTool

| Props | Description | Type   | Default |
| ----- | ----------- | ------ | ------- |
| html  | your code   | string | -       |

# Table

| Props        | Description        | Type       | Default |
| ------------ | ------------------ | ---------- | ------- |
| content      | table data         | string[][] | -       |
| withHeadings | add table headings | boolean    | false   |
