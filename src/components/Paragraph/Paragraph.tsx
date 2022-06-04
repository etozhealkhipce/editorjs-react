import React, { FC } from 'react';
import parse from 'html-react-parser';
import { parseText } from '@utils/parseText';
import Styles from './Paragraph.module.css';

type TParagraph = {
  text: string;
};

export const Paragraph: FC<TParagraph> = ({ text }) => {
  const parsedText = parse(text);
  parseText(text);

  return <p className={Styles.paragraph}>{parsedText}</p>;
};
