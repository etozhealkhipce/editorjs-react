import React, { FC } from 'react';

export type TImage = {
  caption: string;
  className: any;
  src: string;
};

export const Image: FC<TImage> = ({ src, className, caption }) => {
  return (() => (
    <img src={src} className={className.paragraph} alt={caption} />
  ))();
};
