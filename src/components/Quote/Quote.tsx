import React, { FC, useMemo } from 'react';
import { TClassName } from 'types/index.types';
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
        <p className={Styles.paragraph}>{text}</p>
      </blockquote>
      <figcaption>— {caption}</figcaption>
    </figure>
  );
};
