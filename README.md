# @alkhipce/editorjs-react

[![](https://flat.badgen.net/npm/v/@alkhipce/editorjs-react?icon=npm)](https://www.npmjs.com/package/@alkhipce/editorjs-react)
[![](https://flat.badgen.net/github/stars/etozhealkhipce/editorjs-react)](https://github.com/etozhealkhipce/editorjs-react)

## Install

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
