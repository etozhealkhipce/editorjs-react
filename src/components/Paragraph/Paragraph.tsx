import React, { FC } from 'react';

export type TParagraph = {
  text: string;
  className: any;
};

export const Paragraph: FC<TParagraph> = ({ className, text }) => {
  return (() => <p className={className.paragraph}>{text}</p>)();
};
