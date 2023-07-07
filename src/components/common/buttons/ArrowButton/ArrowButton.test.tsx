import { render, screen } from '@testing-library/react';

import type { ArrowButtonDirection } from './ArrowButton';
import { ArrowButton, ARROWBUTTON_TEST_IDS } from './ArrowButton';

describe('IconButton direction', () => {
  const directions: ArrowButtonDirection[] = ['down', 'left', 'right', 'up'];

  for (const direction of directions) {
    test('should display change direction when provided', () => {
      render(<ArrowButton direction={direction} />);

      const icon = screen.getByTestId(ARROWBUTTON_TEST_IDS.ICON);

      expect(icon).toBeInTheDocument();
    });
  }
});
