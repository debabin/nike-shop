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
    const classNames = 'min-h-[60px] py-[18px] px-[24px]';
    render(<Button {...buttonProps} size='medium' />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    expect(container).toHaveClass(classNames);
  });

  test('should correct show small size when provided', () => {
    const classNames = 'py-[6px] px-[20px]';
    render(<Button {...buttonProps} size='small' />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    expect(container).toHaveClass(classNames);
  });
});

describe('Button variant', () => {
  test('should correct show contained variant when provided', () => {
    const classNames = 'border-primary bg-primary text-white hover:border-grey hover:bg-grey';
    render(<Button {...buttonProps} variant='contained' />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    expect(container).toHaveClass(classNames);
  });

  test('should correct show outlined variant when provided', () => {
    const classNames = 'border-secondary hover:border-primary';
    render(<Button {...buttonProps} variant='outlined' />);

    const container = screen.getByTestId(BUTTON_TEST_IDS.CONTAINER);

    expect(container).toHaveClass(classNames);
  });
});

describe('Button', () => {
  test('should correct show outlined variant when provided', () => {
    render(<Button {...buttonProps} />);

    const children = screen.getByTestId(BUTTON_TEST_IDS.CHILDREN);

    expect(children).toHaveTextContent(buttonProps.children);
  });

  test('should display loader when loading', () => {
    render(<Button {...buttonProps} loading />);

    const loader = screen.getByTestId(BUTTON_TEST_IDS.LOADER);

    expect(loader).toBeInTheDocument();
  });
});
