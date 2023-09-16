import React, { FC } from 'react';
import { TClassName } from 'types/index.types';
import Styles from './RawTool.module.css';

export type TRawToolData = {
  html: string;
} & TClassName;

export const RawTool: FC<TRawToolData> = ({ html, className }) => {
  return (
    <pre>
      <code className={`${Styles.rawTool} ${className}`}>{html}</code>
    </pre>
  );
};
