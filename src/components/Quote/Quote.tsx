import React, { FC, useMemo } from 'react';
import { TClassName } from 'types/index.types';
import { parseText } from '@utils/parseText';
import Styles from './Quote.module.css';

export type TQuoteData = {
  text: string;
  caption: string;
  alignment: 'left' | 'center';
} & TClassName;

export const Quote: FC<TQuoteData> = ({
  text,
  caption,
  alignment,
  className,
}) => {
  const isTextCentered = useMemo(() => alignment === 'center', []);

  return (
    <figure className={`${Styles.figure} ${className}`}>
      <blockquote
        className={isTextCentered ? Styles.centeredQuote : Styles.blockquote}
      >
        <p className={Styles.paragraph}>{parseText(text)}</p>
      </blockquote>
      <figcaption>— {parseText(caption)}</figcaption>
    </figure>
  );
};
