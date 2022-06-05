import React, { FC } from 'react';
import Styles from './Delimiter.module.css';

export type TDelimiter = {};

export const Delimiter: FC<TDelimiter> = () => {
  return <div className={Styles.delimiter}></div>;
};
