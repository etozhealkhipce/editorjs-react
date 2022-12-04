import React, { FC } from 'react';
import Styles from './Code.module.css';

export type TCodeData = {
  code: string;
};

export const Code: FC<TCodeData> = ({ code }) => {
  return (
    <pre>
      <code className={Styles.code}>{code}</code>
    </pre>
  );
};
