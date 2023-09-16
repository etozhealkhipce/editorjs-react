import React, { FC } from 'react';
import { TClassName } from 'types/index.types';
import Styles from './Delimiter.module.css';

export type TDelimiterData = {} & TClassName;

export const Delimiter: FC<TDelimiterData> = ({ className }) => (
  <div className={`${Styles.delimiter} ${className}`} />
);
