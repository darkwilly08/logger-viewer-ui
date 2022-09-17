import React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styles from '../carousel.module.scss';
import { Item } from '../models/item';

interface SliderProps {
  item: Item;
  height: number | string;
}

export function SliderItem({ item, height }: SliderProps) {
  const opacity = 0.4;

  return (
    <div
      className={styles.carousel}
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0, ${opacity}), rgba(0,0,0, ${opacity})), url(${item.background})`,
        height,
      }}
    >
      <div className={styles.carousel__content}>
        <Typography color="secondary" className={styles.carousel__content__title}>
          {item.title}
        </Typography>
        <p className={styles.carousel__content__description} style={{ color: '#fff' }}>
          {item.description}
        </p>
        {item.url && (
          <Button href={item.url} variant="contained" color={item.color}>
            Ver más
          </Button>
        )}
      </div>
    </div>
  );
}
