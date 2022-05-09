import React from 'react';
import { FC } from 'react';
import { Header } from './components/Header/Header';

export const Parser: FC<any> = ({ data }) => {
  const { blocks } = data;

  console.log(data);

  return (
    <>
      {blocks.map((item: any) => {
        const { type, data, id } = item;

        switch (type) {
          case 'header':
            return <Header key={id} level={data.level} text={data.text} />;

          default:
            return <div>Error!</div>;
        }
      })}
    </>
  );
};

export { Header, THeader } from './components/Header/Header';
