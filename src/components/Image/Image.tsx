import React, { FC } from 'react';
import Styles from './Image.module.css';

export type TImage = {
  caption: string;
  src: string;
  border?: boolean;
  background?: boolean;
};

export const Image: FC<TImage> = ({
  src,
  caption,
  border = false,
  background = false,
}) => {
  return (
    <figure className={Styles.figure}>
      {background ? (
        <div className={!border ? Styles.background : Styles.backgroundBorder}>
          <img
            src={src}
            className={!border ? Styles.image : Styles.imageBorder}
            alt={caption}
          />
        </div>
      ) : (
        <img
          src={src}
          className={!border ? Styles.image : Styles.imageBorder}
          alt={caption}
        />
      )}
      {caption && <figcaption className={Styles.caption}>{caption}</figcaption>}
    </figure>
  );
};
