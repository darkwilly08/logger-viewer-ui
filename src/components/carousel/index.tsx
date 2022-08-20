import React from 'react';

import MuiCarousel from 'react-material-ui-carousel';

import { ImageItem } from './image';
import { Item } from './models/item';
import { SliderItem } from './slider';

export enum CarouselTypeEnum {
  IMAGE = 'image',
  SLIDER = 'slider',
}

export interface CarouselProps {
  height?: number | string;
  showIndicators?: boolean;
  navButtons?: boolean;
  items: Item[];
  type: CarouselTypeEnum;
}

export function Carousel({ height, showIndicators, items, type, navButtons }: CarouselProps) {
  return (
    <MuiCarousel height={height} indicators={showIndicators} navButtonsAlwaysVisible={navButtons}>
      {items.map((item) => {
        switch (type) {
          case CarouselTypeEnum.SLIDER:
            return <SliderItem key={item.id} item={item} height={height!} />;
          case CarouselTypeEnum.IMAGE:
            return <ImageItem key={item.id} item={item} height={height!} />;
          default:
            return <div />;
        }
      })}
    </MuiCarousel>
  );
}

Carousel.defaultProps = {
  showIndicators: false,
  navButtons: false,
  height: 'auto',
};
