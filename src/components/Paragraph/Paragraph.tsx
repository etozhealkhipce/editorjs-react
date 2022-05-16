import React, { FC } from 'react';
import parse from 'html-react-parser';
import { parseText } from '../../utils/parseText';

type TParagraph = {
  text: string;
  className: any;
};

export const Paragraph: FC<TParagraph> = ({ className, text }) => {
  const parsedText = parse(text);
  parseText(text);

  return (() => <p className={className.paragraph}>{parsedText}</p>)();
};
