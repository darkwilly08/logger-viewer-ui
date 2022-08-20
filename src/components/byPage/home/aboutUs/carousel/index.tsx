import React from 'react';

import MuiCarousel from 'react-material-ui-carousel';

import styles from './carousel.module.scss';

interface ItemProps {
  item: CarouselItem;
  height: number | string;
}

function Item({ item, height }: ItemProps) {
  return (
    <div
      className={styles.wrapper}
      style={{
        height,
      }}
    >
      <div className={styles.speechbubble}>
        <p>
          {item.message}

          <span className={styles.username}>{item.username}</span>
        </p>
      </div>
    </div>
  );
}

interface CarouselItem {
  id: number;
  message: string;
  username: string;
}

export interface CarouselProps {
  height?: number | string;
  showIndicators?: boolean;
  items: CarouselItem[];
}

export function Carousel({ height, showIndicators, items }: CarouselProps) {
  return (
    <MuiCarousel indicators={showIndicators}>
      {items.map((item) => (
        <Item key={item.id} item={item} height={height!} />
      ))}
    </MuiCarousel>
  );
}

Carousel.defaultProps = {
  showIndicators: false,
  height: 'auto',
};
