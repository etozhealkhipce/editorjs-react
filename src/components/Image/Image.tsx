import React, { FC } from 'react';
import { TClassName } from 'types/index.types';
import Styles from './Image.module.css';

export type TImageData = {
  file: {
    url: string;
  };
  caption?: string;
  withBorder?: boolean;
  stretched?: boolean;
  withBackground?: boolean;
} & TClassName;

export const Image: FC<TImageData> = ({
  file,
  caption,
  withBorder = false,
  withBackground = false,
  stretched = false,
  className,
}) => {
  return (
    <figure
      className={`${stretched ? Styles.stretched : Styles.figure} ${className}`}
    >
      {withBackground ? (
        <div
          className={!withBorder ? Styles.background : Styles.backgroundBorder}
        >
          <img
            src={file.url}
            className={!withBorder ? Styles.image : Styles.imageBorder}
            alt={caption}
          />
        </div>
      ) : (
        <img
          src={file.url}
          className={!withBorder ? Styles.image : Styles.imageBorder}
          alt={caption}
        />
      )}
      {caption && <figcaption className={Styles.caption}>{caption}</figcaption>}
    </figure>
  );
};
