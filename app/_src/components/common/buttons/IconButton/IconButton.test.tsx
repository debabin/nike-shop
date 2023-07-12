import { render, screen } from '@testing-library/react';

import { LikeIcon } from '@/ui/icons';

import type { IconButtonProps } from './IconButton';
import { IconButton, ICONBUTTON_TEST_IDS } from './IconButton';

const iconButtonProps = {
  icon: <LikeIcon />,
  onClick: jest.fn()
} satisfies IconButtonProps;

describe('IconButton icon', () => {
  test('should display icon when provided', () => {
    render(<IconButton {...iconButtonProps} />);

    const icon = screen.getByTestId(ICONBUTTON_TEST_IDS.ICON);

    expect(icon).toBeInTheDocument();
  });
});
