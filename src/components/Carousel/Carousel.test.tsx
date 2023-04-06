import { render, screen } from '@testing-library/react';

import { Carousel, CAROUSEL_TEST_IDS } from './Carousel';

describe('Carousel', () => {
  test('should render items when provided', () => {
    render(
      <Carousel
        items={[
          { id: '1', image: { src: '/', alt: 'li 1' }, title: 'li 1' },
          { id: '2', image: { src: '/', alt: 'li 2' }, title: 'li 2' }
        ]}
      />
    );

    [1, 2].forEach((id) => {
      const item = screen.getByTestId(`${CAROUSEL_TEST_IDS.ITEM}-${id}`);
      expect(item).toBeInTheDocument();
    });
  });

  test('should render item label when provided', () => {
    render(<Carousel items={[{ id: '1', image: { src: '/', alt: 'li 1' }, title: 'li 1' }]} />);

    const item = screen.getByTestId(`${CAROUSEL_TEST_IDS.ITEM}-1`);

    expect(item).toBeInTheDocument();
  });
});
