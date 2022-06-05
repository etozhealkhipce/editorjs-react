import React, { FC } from 'react';
import Styles from './Code.module.css';

export type TCode = {
  code: string;
};

export const Code: FC<TCode> = ({ code }) => {
  return (
    <pre>
      <code className={Styles.code}>{code}</code>
    </pre>
  );
};
