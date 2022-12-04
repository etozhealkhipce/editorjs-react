import React, { FC } from 'react';
import Styles from './Delimiter.module.css';

export type TDelimiterData = {};

export const Delimiter: FC<TDelimiterData> = () => (
  <div className={Styles.delimiter} />
);
