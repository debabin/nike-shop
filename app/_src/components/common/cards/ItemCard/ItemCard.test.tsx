import { render, screen } from '@testing-library/react';

import type { ItemCardProps } from './ItemCard';
import { ITEMCARD_TEST_IDS, ItemCard } from './ItemCard';

const itemCardProps: ItemCardProps = {
  image: {
    alt: 'image',
    src: '/'
  },
  title: 'title',
  type: 'type',
  price: '$1.0'
};

describe('ItemCard', () => {
  test('should render image when provided', () => {
    render(<ItemCard {...itemCardProps} />);

    const image = screen.getByTestId(ITEMCARD_TEST_IDS.IMAGE);

    expect(image).toBeInTheDocument();
  });

  test('should render title when provided', () => {
    render(<ItemCard {...itemCardProps} />);

    const title = screen.getByTestId(ITEMCARD_TEST_IDS.TITLE);

    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('title');
  });

  test('should render price when provided', () => {
    render(<ItemCard {...itemCardProps} />);

    const price = screen.getByTestId(ITEMCARD_TEST_IDS.PRICE);

    expect(price).toBeInTheDocument();
    expect(price).toHaveTextContent('$1.0');
  });

  test('should render caption when provided', () => {
    render(<ItemCard {...itemCardProps} />);

    const type = screen.getByTestId(ITEMCARD_TEST_IDS.TYPE);

    expect(type).toBeInTheDocument();
    expect(type).toHaveTextContent('type');
  });

  test('should render caption when provided', () => {
    render(<ItemCard {...itemCardProps} />);

    const type = screen.getByTestId(ITEMCARD_TEST_IDS.TYPE);

    expect(type).toBeInTheDocument();
    expect(type).toHaveTextContent('type');
  });
});
