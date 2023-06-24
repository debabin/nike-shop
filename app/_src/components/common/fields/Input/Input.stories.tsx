import type { StoryObj, Meta } from '@storybook/react';

import { ICON_OPTIONS } from '../../icons/storybook';

import { Input } from './Input';

type Story = StoryObj<typeof Input>;
const InputTemplate: Story = { render: (args) => <Input {...args} /> };

export const Playground = { ...InputTemplate };

export default {
  component: Input,
  title: 'ui/inputs/input',
  argTypes: {
    icon: {
      control: {
        type: 'select'
      },
      options: ICON_OPTIONS
    }
  }
} as Meta<typeof Input>;
