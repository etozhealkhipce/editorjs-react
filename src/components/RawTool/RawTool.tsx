import React, { FC } from 'react';
import Styles from './RawTool.module.css';

export type TRawTool = {
  html: string;
};

export const RawTool: FC<TRawTool> = ({ html }) => {
  return (
    <pre>
      <code className={Styles.rawTool}>{html}</code>
    </pre>
  );
};
