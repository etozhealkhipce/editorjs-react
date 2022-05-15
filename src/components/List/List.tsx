import React, { FC } from 'react';

export type TList = {
  className: any;
  listItems: string[];
  type?: 'ordered' | 'unordered';
};

export const List: FC<TList> = ({ className, listItems }) => {
  return (() => (
    <ul className={className.list}>
      {listItems.map((li, index) => (
        <li className={className.listItem} key={index}>
          {li}
        </li>
      ))}
    </ul>
  ))();
};
