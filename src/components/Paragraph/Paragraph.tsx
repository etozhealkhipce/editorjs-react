import React, { FC } from 'react';
import Styles from './Paragraph.module.css';
import { parseText } from '@utils/parseText';

export type TParagraphData = {
  text: string;
};

export const Paragraph: FC<TParagraphData> = ({ text }) => (
  <p className={Styles.paragraph}>{parseText(text)}</p>
);
