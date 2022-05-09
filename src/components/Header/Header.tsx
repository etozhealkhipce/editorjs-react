import React, { FC } from 'react';
// import style from './Header.module.css';

type TLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type THeader = {
  level: TLevel;
  text: string;
  className: any;
};

export const Header: FC<THeader> = ({ className, level, text }) => {
  return (() => {
    switch (level) {
      case 1:
        return <h1 className={className.header_h1}>{text}</h1>;
      case 2:
        return <h2 className={className.header_h2}>{text}</h2>;
      case 3:
        return <h3 className={className.header_h3}>{text}</h3>;
      case 4:
        return <h4 className={className.header_h4}>{text}</h4>;
      case 5:
        return <h5 className={className.header_h5}>{text}</h5>;
      case 6:
        return <h6 className={className.header_h6}>{text}</h6>;
      default:
        return <h1 className={className.header_h1}>{text}</h1>;
    }
  })();
};
