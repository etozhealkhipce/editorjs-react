import React from 'react';
import { FC } from 'react';
import { Header } from './components/Header';
import { List } from './components/List/List';
import { Paragraph } from './components/Paragraph/Paragraph';
import { Image } from './components/Image/Image';
import Styles from './Styles.module.css';
import { Delimiter } from './components/Delimiter/Delimiter';

export const Parser: FC<any> = ({ data }) => {
  const { blocks } = data;

  return (
    <>
      {blocks.map((item: any) => {
        const { type, data, id } = item;

        switch (type) {
          case 'header':
            return (
              <Header
                key={id}
                level={data.level}
                text={data.text}
                className={Styles}
              />
            );
          case 'paragraph':
            return <Paragraph key={id} text={data.text} className={Styles} />;
          case 'list':
            return <List key={id} listItems={data.items} className={Styles} />;
          case 'delimiter':
            return <Delimiter className={Styles} />;
          case 'image':
            return (
              <Image
                key={id}
                src={data.file.url}
                className={Styles}
                caption={data.caption}
              />
            );
          default:
            return <div>Error!</div>;
        }
      })}
    </>
  );
};

export { Header, THeader } from './components/Header/Header';
