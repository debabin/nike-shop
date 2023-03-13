import { render, screen } from '@testing-library/react';

import type { ButtonProps } from './Button';
import { Button, BUTTON_TEST_IDS } from './Button';

const buttonProps = {
  children: 'button text',
  onClick: jest.fn()
} satisfies ButtonProps;

describe('Button', () => {
  it('should display provided label', () => {
    render(<Button {...buttonProps} />);

    const label = screen.getByTestId(BUTTON_TEST_IDS.LABEL);

    expect(label).toHaveTextContent(buttonProps.children);
  });
  it('should display loader when loading', () => {
    render(<Button {...buttonProps} loading />);

    const loader = screen.getByTestId(BUTTON_TEST_IDS.LOADER);

    expect(loader).toBeInTheDocument();
  });
});
