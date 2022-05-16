import React, { FC } from 'react';
import parse from 'html-react-parser';

export type TList = {
  className: any;
  listItems: string[];
  orderedList?: boolean;
};

export const List: FC<TList> = ({
  className,
  listItems,
  orderedList = true,
}) => {
  return orderedList ? (
    <ul className={className.list}>
      {listItems.map((li, index) => (
        <li className={className.listItem} key={index}>
          {parse(li)}
        </li>
      ))}
    </ul>
  ) : (
    <ol className={className.list}>
      {listItems.map((li, index) => (
        <li className={className.listItem} key={index}>
          {parse(li)}
        </li>
      ))}
    </ol>
  );
};
