import type { Meta, StoryObj } from '@storybook/react';

import type { ArrowButtonProps } from './ArrowButton';
import { ArrowButton } from './ArrowButton';

const arrowButtonProps: ArrowButtonProps = {
  direction: 'right'
};

type Story = StoryObj<typeof ArrowButton>;
const ArrowButtonTemplate: Story = { render: (args) => <ArrowButton {...args} /> };

export const Playground = { ...ArrowButtonTemplate };
Playground.args = arrowButtonProps;

export const AllDirections: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '15px' }}>
      <ArrowButton {...args} direction='right' />
      <ArrowButton {...args} direction='left' />
      <ArrowButton {...args} direction='up' />
      <ArrowButton {...args} direction='down' />
    </div>
  )
};
AllDirections.args = arrowButtonProps;

export default {
  component: ArrowButton,
  title: 'ui/buttons/arrow button'
} as Meta<typeof ArrowButton>;
