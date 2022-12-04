import React, { FC } from 'react';
import Styles from './RawTool.module.css';

export type TRawToolData = {
  html: string;
};

export const RawTool: FC<TRawToolData> = ({ html }) => {
  return (
    <pre>
      <code className={Styles.rawTool}>{html}</code>
    </pre>
  );
};
