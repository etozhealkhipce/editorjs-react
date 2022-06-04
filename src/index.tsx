import React, { FC } from 'react';
import Header from './components/Header';
import List from './components/List';
import Paragraph from './components/Paragraph';
import Image from './components/Image';
import Delimiter from './components/Delimiter';
import Code from './components/Code';
import RawTool from './components/RawTool';
// import Styles from './Styles.module.css';

export const Parser: FC<any> = ({ data }) => {
  const { blocks } = data;

  return (
    <>
      {blocks.map((item: any) => {
        const { type, data, id } = item;

        switch (type) {
          case 'header':
            return <Header key={id} level={data.level} text={data.text} />;
          case 'paragraph':
            return <Paragraph key={id} text={data.text} />;
          case 'list':
            return <List key={id} listItems={data.items} />;
          case 'delimiter':
            return <Delimiter />;
          case 'image':
            return (
              <Image key={id} src={data.file.url} caption={data.caption} />
            );
          case 'code':
            return <Code key={id} code={data.code} />;
          case 'rawTool':
            return <RawTool key={id} html={data.html} />;
          default:
            return <div>Error!</div>;
        }
      })}
    </>
  );
};

export { Parser as default };
