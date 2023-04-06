import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ICON_OPTIONS } from '../../icons/storybook';

import { Input } from './Input';

const InputTemplate: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Playground: ComponentStory<typeof Input> = InputTemplate.bind({});

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
} as ComponentMeta<typeof Input>;
