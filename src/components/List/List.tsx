import React, { FC, useMemo } from 'react';
import Styles from './List.module.css';
import { parseText } from '../../utils/parseText';

const ORDERED_KEY = 'ordered';
const UNORDERED_KEY = 'unordered';

export type TListData = {
  items: string[];
  style?: typeof ORDERED_KEY | typeof UNORDERED_KEY;
};

export const List: FC<TListData> = ({ items, style = UNORDERED_KEY }) => {
  const orderedList = useMemo(() => style === UNORDERED_KEY, []);

  return orderedList ? (
    <ul className={Styles.list}>
      {items.map((text, index) => (
        <li className={Styles.listItem} key={index}>
          {parseText(text)}
        </li>
      ))}
    </ul>
  ) : (
    <ol className={Styles.list}>
      {items.map((text, index) => (
        <li className={Styles.listItem} key={index}>
          {parseText(text)}
        </li>
      ))}
    </ol>
  );
};
