import React from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MuiCarousel from 'react-material-ui-carousel';

import styles from './carousel.module.scss';

interface ItemProps {
  item: CarouselItem;
  height: number | string;
}

function Item({ item, height }: ItemProps) {
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
        <Button className="CheckButton">Check it out!</Button>
      </div>
    </div>
  );
}

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  background: string;
}

export interface CarouselProps {
  height?: number | string;
  showIndicators?: boolean;
  items: CarouselItem[];
}

export function Carousel({ height, showIndicators, items }: CarouselProps) {
  return (
    <MuiCarousel height={height} indicators={showIndicators}>
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
