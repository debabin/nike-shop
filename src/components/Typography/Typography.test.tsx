import { render, screen } from '@testing-library/react';

import type { TypographyProps } from './Typography';
import { TYPOGRAPHY_TEST_IDS, Typography } from './Typography';

const typographyProps = {
  children: 'typography text',
  variant: 'title-1'
} satisfies TypographyProps;

const typographyVariants: { variant: TypographyProps['variant']; classes: string }[] = [
  {
    variant: 'title-1',
    classes: 'title-1'
  }
];

describe('Typography variants', () => {
  typographyVariants.forEach((typographyVariant) => {
    test(`should correct show ${typographyVariant.variant} variant when provided`, () => {
      render(<Typography {...typographyProps} variant={typographyVariant.variant} />);

      const container = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER);

      expect(container).toHaveClass(typographyVariant.classes);
    });
  });
});

describe('Typography', () => {
  test('should render div tage by default', () => {
    render(<Typography {...typographyProps} />);

    const container = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER);

    expect(container.tagName).toBe('DIV');
  });
});
