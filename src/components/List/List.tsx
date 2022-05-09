import React, { FC } from 'react';

export type TList = {
  className: any;
  listItems: string[];
  type?: 'ordered' | 'unordered';
};

export const List: FC<TList> = ({ className, listItems }) => {
  console.log(listItems);
  return (() => (
    <ul className={className.list}>
      {listItems.map((li) => (
        <li className={className.listItem}>{li}</li>
      ))}
    </ul>
  ))();
};
