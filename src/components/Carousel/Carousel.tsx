import React from 'react';

import type { CarouselItemProps } from '../cards';
import { CarouselItem } from '../cards';

interface CarouselProps {
  /**
   * title
   */
  title: string;
  /**
   * items
   */
  items: CarouselItemProps[];
}

export const CAROUSEL_TEST_IDS = {
  CONTAINER: 'carousel-container',
  LIST: 'carousel-list',
  ITEM: 'carousel-item'
};

/**
 * Carousel component
 */
export const Carousel: React.FC<CarouselProps> = ({ title, items }) => {
  const [index, setIndex] = React.useState(0);

  return (
    <div data-testid={CAROUSEL_TEST_IDS.CONTAINER}>
      <ul data-testid={CAROUSEL_TEST_IDS.LIST}>
        {items.map((item) => (
          <li key={item.id} data-testid={`${CAROUSEL_TEST_IDS.ITEM}-${item.id}`}>
            <CarouselItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
