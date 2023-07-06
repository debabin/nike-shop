import { render, screen } from '@testing-library/react';

import type { GalleryProps } from './Gallery';
import { GALLERY_TEST_IDS, Gallery } from './Gallery';

const galleryProps = {
  images: [
    {
      alt: '1',
      src: '/'
    },
    {
      alt: '2',
      src: '/'
    },
    {
      alt: '3',
      src: '/'
    }
  ]
} satisfies GalleryProps;

describe('Gallery', () => {
  test('should render images when provided', () => {
    render(<Gallery {...galleryProps} />);

    galleryProps.images.forEach((_, index) => {
      const image = screen.getByTestId(`${GALLERY_TEST_IDS.IMAGE}-${index}`);

      expect(image).toBeInTheDocument();
    });
  });
});
