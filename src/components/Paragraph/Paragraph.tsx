import React, { FC } from 'react';
import Styles from './Paragraph.module.css';
import { TClassName } from 'types/index.types';

export type TParagraphData = {
  text: string;
} & TClassName;

export const Paragraph: FC<TParagraphData> = ({ text, className }) => (
  <p className={`${Styles.paragraph} ${className}`}>{text}</p>
);
