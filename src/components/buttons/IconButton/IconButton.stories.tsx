import { ComponentMeta, ComponentStory } from '@storybook/react';

import * as Icons from '@/ui/icons';

import type { IconButtonProps } from './IconButton';
import { IconButton } from './IconButton';

const iconButtonProps: IconButtonProps = {
  icon: <Icons.LikeIcon />
};

const IconButtonTemplate: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

export const Playground: ComponentStory<typeof IconButton> = IconButtonTemplate.bind({});
Playground.args = iconButtonProps;

export default {
  component: IconButton,
  title: 'ui/buttons/icon button',
  argTypes: {
    icon: {
      control: {
        type: 'select'
      },
      options: Icons
    }
  }
} as ComponentMeta<typeof IconButton>;
