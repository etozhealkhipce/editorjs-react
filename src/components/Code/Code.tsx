import React, { FC } from 'react';

import Styles from './Code.module.css';

import { TClassName } from 'types/index.types';

export type TCodeData = {
  code: string;
} & TClassName;

export const Code: FC<TCodeData> = ({ code, className }) => {
  return (
    <pre>
      <code className={`${Styles.code} ${className}`}>{code}</code>
    </pre>
  );
};
