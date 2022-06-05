import React, { FC } from 'react';
import Styles from './Quote.module.css';

export type TQuote = {
  text: string;
  caption: string;
  alignment: 'left' | 'right';
};

export const Quote: FC<TQuote> = ({ text, caption }) => {
  return (
    <figure className={Styles.figure}>
      <blockquote className={Styles.blockquote}>
        <p className={Styles.paragraph}>{text}</p>
      </blockquote>
      <figcaption>— {caption}</figcaption>
    </figure>
  );
};
