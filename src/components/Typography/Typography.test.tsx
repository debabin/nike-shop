import { render, screen } from '@testing-library/react';

import type { TypographyProps, TypographyTag } from './Typography';
import { TYPOGRAPHY_TEST_IDS, Typography } from './Typography';

const typographyProps = {
  children: 'typography text',
  variant: 'title-1'
} satisfies TypographyProps<TypographyTag>;

describe('Typography variants', () => {
  const typographyVariants: TypographyProps<TypographyTag>['variant'][] = [
    'title-1',
    'title-2',
    'title-3',
    'title-4',
    'title-5',
    'body-1',
    'body-2',
    'body-3',
    'link',
    'sub-title'
  ];

  typographyVariants.forEach((typographyVariant) => {
    test(`should correct show ${typographyVariant} variant when provided`, () => {
      render(<Typography {...typographyProps} variant={typographyVariant} />);

      const container = screen.getByTestId(TYPOGRAPHY_TEST_IDS.CONTAINER);

      expect(container).toHaveClass(typographyVariant);
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
