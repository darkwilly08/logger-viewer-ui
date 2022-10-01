/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './withImage.module.scss';

export interface CardWithImageProps {
  imgUrl: string;
  imgAlt: string;
  proportionalSize?: number;
  children: JSX.Element;
}

export function CardWithImage({ proportionalSize, imgUrl, imgAlt, children }: CardWithImageProps) {
  return (
    <div className={styles.container}>
      <div className={`${styles.container__img} ${styles.container__section}`}>
        <img src={imgUrl} alt={imgAlt} />
      </div>
      <div className={styles.container__section} style={{ flex: proportionalSize }}>
        {children}
      </div>
    </div>
  );
}

CardWithImage.defaultProps = {
  proportionalSize: 1,
};
