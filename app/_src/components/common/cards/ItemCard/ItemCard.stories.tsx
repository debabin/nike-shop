import type { Meta, StoryObj } from '@storybook/react';

import type { ItemCardProps } from './ItemCard';
import { ItemCard } from './ItemCard';

import shoes from '@/.storybook/public/assets/images/shoes.webp';

const itemCardProps: ItemCardProps = {
  image: {
    alt: 'image',
    src: shoes
  },
  title: 'title',
  type: 'type',
  price: '$1.0'
};

type Story = StoryObj<typeof ItemCard>;
const ItemCardTemplate: Story = { render: (args) => <ItemCard {...args} /> };

export const Playground = { ...ItemCardTemplate };
Playground.args = itemCardProps;

export default {
  component: ItemCard,
  title: 'ui/cards/item card'
} as Meta<typeof ItemCard>;
