import React, { FC } from 'react';

export type TDelimiter = {
  className: any;
};

export const Delimiter: FC<TDelimiter> = ({ className }) => {
  return (() => <div className={className.delimiter}></div>)();
};
