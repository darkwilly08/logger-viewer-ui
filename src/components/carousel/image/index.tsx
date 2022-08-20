import React from 'react';

import { Item } from '../models/item';
import styles from './image.module.scss';

interface ImageProps {
  item: Item;
  height: number | string;
}

export function ImageItem({ item, height }: ImageProps) {
  return (
    <div className={styles.container}>
      <img key={item.id} src={item.background} alt={item.title} height={height} />
    </div>
  );
}
