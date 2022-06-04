import React, { FC } from 'react';
import Styles from './Image.module.css';

export type TImage = {
  caption: string;
  src: string;
};

export const Image: FC<TImage> = ({ src, caption }) => {
  return (
    <>
      <img src={src} className={Styles.image} alt={caption} />
      {caption && <caption>{caption}</caption>}
    </>
  );
};
