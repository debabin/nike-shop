import { render, screen } from '@testing-library/react';

import { FindIcon } from '@/ui/icons';

import { Input, INPUT_TEST_IDS } from './Input';

describe('Button icon', () => {
  test('should display icon when provided', () => {
    render(<Input icon={<FindIcon />} />);

    const icon = screen.getByTestId(INPUT_TEST_IDS.ICON);

    expect(icon).toBeInTheDocument();
  });

  test('should not display icon when provided', () => {
    render(<Input />);

    const icon = screen.queryByTestId(INPUT_TEST_IDS.ICON);

    expect(icon).not.toBeInTheDocument();
  });
});
