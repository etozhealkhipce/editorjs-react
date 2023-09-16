import React, { FC } from 'react';
import { TClassName } from 'types/index.types';
import Styles from './Header.module.css';

type TLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type THeaderData = {
  level: TLevel;
  text: string;
} & TClassName;

export const Header: FC<THeaderData> = ({ level, text, className }) => {
  return (() => {
    switch (level) {
      case 1:
        return <h1 className={`${Styles.header} ${className}`}>{text}</h1>;
      case 2:
        return <h2 className={`${Styles.header} ${className}`}>{text}</h2>;
      case 3:
        return <h3 className={`${Styles.header} ${className}`}>{text}</h3>;
      case 4:
        return <h4 className={`${Styles.header} ${className}`}>{text}</h4>;
      case 5:
        return <h5 className={`${Styles.header} ${className}`}>{text}</h5>;
      case 6:
        return <h6 className={`${Styles.header} ${className}`}>{text}</h6>;
      default:
        return <h1 className={`${Styles.header} ${className}`}>{text}</h1>;
    }
  })();
};
