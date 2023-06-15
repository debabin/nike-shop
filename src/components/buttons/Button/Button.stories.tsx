import type { Meta, StoryObj } from '@storybook/react';

import type { ButtonProps } from './Button';
import { Button } from './Button';

const buttonProps: ButtonProps = {
  children: 'button',
  loading: false,
  size: 'medium',
  variant: 'contained'
};

type Story = StoryObj<typeof Button>;
const ButtonTemplate: Story = { render: (args) => <Button {...args} /> };

export const Playground = { ...ButtonTemplate };
Playground.args = buttonProps;

export const Cointained = { ...ButtonTemplate };
Cointained.args = { ...buttonProps, variant: 'contained' };

export const Outlined = { ...ButtonTemplate };
Outlined.args = { ...buttonProps, variant: 'outlined' };

export default {
  component: Button,
  title: 'ui/buttons/button'
} as Meta<typeof Button>;
