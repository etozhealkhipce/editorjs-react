import React, { FC } from 'react';
import { parseText } from '../../utils/parseText';
import Styles from './Paragraph.module.css';

export type TParagraphData = {
  text: string;
};

export const Paragraph: FC<TParagraphData> = ({ text }) => (
  <p className={Styles.paragraph}>{parseText(text)}</p>
);
