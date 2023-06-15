import { render, screen } from '@testing-library/react';

import { LikeIcon } from '@/ui/icons';

import type { ButtonProps } from './Button';
import { Button, BUTTON_TEST_IDS } from './Button';

const buttonProps = {
  children: 'button text',
  onClick: jest.fn()
} satisfies ButtonProps;

describe('Button startIcon', () => {
  test('should display startIcon when provided', () => {
    render(<Button {...buttonProps} startIcon={<LikeIcon />} />);

    const startIcon = screen.getByTestId(BUTTON_TEST_IDS.START_ICON);

    expect(startIcon).toBeInTheDocument();
  });

  test('should not display startIcon when provided', () => {
    render(<Button {...buttonProps} />);

    const startIcon = screen.queryByTestId(BUTTON_TEST_IDS.START_ICON);

    expect(startIcon).not.toBeInTheDocument();
  });
});

describe('Button endIcon', () => {
  test('should display endIcon when provided', () => {
    render(<Button {...buttonProps} endIcon={<LikeIcon />} />);

    const endIcon = screen.getByTestId(BUTTON_TEST_IDS.END_ICON);

    expect(endIcon).toBeInTheDocument();
  });

  test('should not display endIcon when provided', () => {
    render(<Button {...buttonProps} />);

    const endIcon = screen.queryByTestId(BUTTON_TEST_IDS.END_ICON);

    expect(endIcon).not.toBeInTheDocument();
  });
});

describe('Button size', () => {
  test('should correct show medium size when provided', () => {
    const classNames = 'min-h-[3.75rem] py-[1.125rem] px-[1.5rem]';
    render(<Button {...buttonProps} size='medium' />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    expect(container).toHaveClass(classNames);
  });

  test('should correct show small size when provided', () => {
    const classNames = 'py-[0.375rem] px-[1.25rem]';
    render(<Button {...buttonProps} size='small' />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    expect(container).toHaveClass(classNames);
  });
});

describe('Button variant', () => {
  test('should correct show contained variant when provided', () => {
    const classNames =
      'border-black-100 bg-black-100 text-white hover:border-gray-300 hover:bg-gray-300';
    render(<Button {...buttonProps} variant='contained' />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    expect(container).toHaveClass(classNames);
  });

  test('should correct show outlined variant when provided', () => {
    const classNames = 'border-black hover:border-black';
    render(<Button {...buttonProps} variant='outlined' />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    expect(container).toHaveClass(classNames);
  });
});

describe('Button', () => {
  test('should display loader when loading', () => {
    render(<Button {...buttonProps} loading />);

    const loader = screen.getByTestId(BUTTON_TEST_IDS.LOADER);

    expect(loader).toBeInTheDocument();
  });
});
