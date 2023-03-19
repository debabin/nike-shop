import { render, screen } from '@testing-library/react';

import type { TypographyProps } from './Typography';
import { TYPOGRAPHY_TEST_IDS, Typography } from './Typography';

const buttonProps = {
  children: 'button text',
  variant: 'title-1'
} satisfies TypographyProps;

const typographyVariants: { variant: TypographyProps['variant']; classes: string }[] = [
  {
    classes: 'font-nike font-[800] text-[72px]',
    variant: 'title-1'
  }
];

describe('Typography variants', () => {
  typographyVariants.forEach((typographyVariant) => {
    test(`should correct show ${typographyVariant.variant} variant when provided`, () => {
      render(<Typography {...buttonProps} variant={typographyVariant.variant} />);

      const container = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER);

      expect(container).toHaveClass(typographyVariant.classes);
    });
  });
});

describe('Typography', () => {
  test('should render div tage by default', () => {
    render(<Typography {...buttonProps} />);

    const container = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER);

    expect(container.tagName).toBe('DIV');
  });
});
