import React, { FC } from 'react';
import parse from 'html-react-parser';
import Styles from './List.module.css';

export type TList = {
  listItems: string[];
  orderedList?: boolean;
};

export const List: FC<TList> = ({ listItems, orderedList = true }) => {
  return orderedList ? (
    <ul className={Styles.list}>
      {listItems.map((li, index) => (
        <li className={Styles.listItem} key={index}>
          {parse(li)}
        </li>
      ))}
    </ul>
  ) : (
    <ol className={Styles.list}>
      {listItems.map((li, index) => (
        <li className={Styles.listItem} key={index}>
          {parse(li)}
        </li>
      ))}
    </ol>
  );
};
