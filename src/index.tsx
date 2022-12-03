import React, { FC } from 'react';
import Header from './components/Header';
import List from './components/List';
import Paragraph from './components/Paragraph';
import Image from './components/Image';
import Delimiter from './components/Delimiter';
import Code from './components/Code';
import RawTool from './components/RawTool';
import Quote from './components/Quote';
import Table from './components/Table';
import './generalStyles.css';
import { IParser } from 'types/ParserData';
import {
  CODE_KEY,
  DATA_KEY,
  DELIMITER_KEY,
  ERROR_KEY,
  HEADER_KEY,
  IMAGE_KEY,
  LIST_KEY,
  PARAGRAPH_KEY,
  QUOTE_KEY,
  RAW_TOOL_KEY,
  TABLE_KEY,
} from 'utils/componentKeys';

export const Parser: FC<Record<typeof DATA_KEY, IParser>> = ({ data }) => {
  const { blocks } = data;

  return (
    <>
      {blocks.map((item) => {
        const { type, data, id } = item;

        switch (type) {
          case HEADER_KEY:
            return <Header key={id} level={data.level} text={data.text} />;
          case PARAGRAPH_KEY:
            return <Paragraph key={id} text={data.text} />;
          case LIST_KEY:
            return <List key={id} items={data.items} style={data.style} />;
          case DELIMITER_KEY:
            return <Delimiter key={id} />;
          case IMAGE_KEY:
            return (
              <Image
                key={id}
                file={data.file}
                caption={data.caption}
                withBorder={data.withBorder}
                withBackground={data.withBackground}
                stretched={data.stretched}
              />
            );
          case CODE_KEY:
            return <Code key={id} code={data.code} />;
          case RAW_TOOL_KEY:
            return <RawTool key={id} html={data.html} />;
          case QUOTE_KEY:
            return (
              <Quote
                key={id}
                text={data.text}
                caption={data.caption}
                alignment={data.alignment}
              />
            );
          case TABLE_KEY:
            return (
              <Table
                key={id}
                content={data.content}
                withHeadings={data.withHeadings}
              />
            );
          default:
            return <div key={ERROR_KEY}>Error!</div>;
        }
      })}
    </>
  );
};

export { Parser as default };
