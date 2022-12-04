import React, { FC } from 'react';
import Styles from './Image.module.css';

export type TImageData = {
  file: {
    url: string;
  };
  caption?: string;
  withBorder?: boolean;
  stretched?: boolean;
  withBackground?: boolean;
};

export const Image: FC<TImageData> = ({
  file,
  caption,
  withBorder = false,
  withBackground = false,
  stretched = false,
}) => {
  return (
    <figure className={stretched ? Styles.stretched : Styles.figure}>
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
