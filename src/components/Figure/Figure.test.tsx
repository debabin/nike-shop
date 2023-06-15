import { render, screen } from '@testing-library/react';

import type { FigureProps } from './Figure';
import { FIGURE_TEST_IDS, Figure } from './Figure';

const figureProps = {
  button: {
    children: 'button text'
  },
  caption: 'caption text',
  image: {
    alt: 'image',
    src: '/'
  }
} satisfies FigureProps;

describe('Figure', () => {
  test('should render image when provided', () => {
    render(<Figure {...figureProps} />);

    const image = screen.getByTestId(FIGURE_TEST_IDS.IMAGE);

    expect(image).toBeInTheDocument();
  });

  test('should render caption when provided', () => {
    render(<Figure {...figureProps} />);

    const caption = screen.getByTestId(FIGURE_TEST_IDS.CAPTION);

    expect(caption).toBeInTheDocument();
    expect(caption).toHaveTextContent('caption text');
  });

  test('should render button when provided', () => {
    render(<Figure {...figureProps} />);

    const button = screen.getByTestId(FIGURE_TEST_IDS.BUTTON);

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('button text');
  });
});
