# @alkhipce/editorjs-react

<<<<<<< Updated upstream
[![](https://flat.badgen.net/npm/v/@alkhipce/editorjs-react?icon=npm)](https://www.npmjs.com/package/@alkhipce/editorjs-react)
[![](https://flat.badgen.net/github/stars/etozhealkhipce/editorjs-react)](https://github.com/etozhealkhipce/editorjs-react)

## Install
=======
<<<<<<< Updated upstream
Congrats! You just saved yourself hours of work by bootstrapping this project with TSDX. Let’s get you oriented with what’s here and how to use it.

> This TSDX setup is meant for developing React component libraries (not apps!) that can be published to NPM. If you’re looking to build a React-based app, you should use `create-react-app`, `razzle`, `nextjs`, `gatsby`, or `react-static`.
=======
[![](https://flat.badgen.net/npm/v/@alkhipce/editorjs-react?icon=npm)](https://www.npmjs.com/package/@alkhipce/editorjs-react)
[![](https://flat.badgen.net/github/stars/etozhealkhipce/editorjs-react)](https://github.com/etozhealkhipce/editorjs-react)
[![](https://flat.badgen.net/badge/demo/site/green)](https://editorjs-react.vercel.app/)

## Demo

#### https://editorjs-react.vercel.app/

## Installation
>>>>>>> Stashed changes
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
| Component |
| --------- |
| Code      |
| Delimiter |
| Header    |
| Image     |
| List      |
| Paragraph |
| Quote     |
| RawTool   |
| Table     |
=======
<<<<<<< Updated upstream
An alternative to fixing this problem would be to remove aliases altogether and define the dependencies referenced as aliases as dev dependencies instead. [However, that might cause other problems.](https://github.com/palmerhq/tsdx/issues/64)
=======
# Code

| Props | Description                                            | Type   | Default |
| ----- | ------------------------------------------------------ | ------ | ------- |
| code  | your code are going to display with preformatted style | string | -       |

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
| file           | heading text level      | object with field url: string; | -       |
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

| Props | Description    | Type   | Default |
| ----- | -------------- | ------ | ------- |
| html  | your html code | string | -       |

# Table

| Props        | Description    | Type       | Default |
| ------------ | -------------- | ---------- | ------- |
| content      | your html code | string[][] | -       |
| withHeadings | boolean        | boolean    | -       |
>>>>>>> Stashed changes
>>>>>>> Stashed changes
