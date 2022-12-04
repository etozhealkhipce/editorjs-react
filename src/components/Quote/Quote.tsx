import React, { FC, useMemo } from 'react';
import { parseText } from '../../utils/parseText';
import Styles from './Quote.module.css';

export type TQuoteData = {
  text: string;
  caption: string;
  alignment: 'left' | 'center';
};

export const Quote: FC<TQuoteData> = ({ text, caption, alignment }) => {
  const isTextCentered = useMemo(() => alignment === 'center', []);

  return (
    <figure className={Styles.figure}>
      <blockquote
        className={isTextCentered ? Styles.centeredQuote : Styles.blockquote}
      >
        <p className={Styles.paragraph}>{parseText(text)}</p>
      </blockquote>
      <figcaption>— {parseText(caption)}</figcaption>
    </figure>
  );
};
