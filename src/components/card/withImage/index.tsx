/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './withImage.module.scss';

export interface CardWithImageProps {
  imgUrl: string;
  imgAlt: string;
  proportionalSize: number;
  minWidth: string | number;
  maxWidth: number;
  maxHeight: number;

  children: JSX.Element;
}

export function CardWithImage({
  proportionalSize,
  maxWidth,
  minWidth,
  maxHeight,
  imgUrl,
  imgAlt,
  children,
}: CardWithImageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.container__img} style={{ maxWidth, width: `${proportionalSize}%`, minWidth }}>
        <img src={imgUrl} alt={imgAlt} style={{ height: maxHeight }} />
      </div>
      <div>{children}</div>
    </div>
  );
}
