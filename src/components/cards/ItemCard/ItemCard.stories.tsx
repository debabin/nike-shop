import type { ComponentMeta, ComponentStory } from '@storybook/react';

import shoes from '../../../../.storybook/public/assets/images/shoes.webp';

import type { ItemCardProps } from './ItemCard';
import { ItemCard } from './ItemCard';

const itemCardProps: ItemCardProps = {
  image: {
    alt: 'image',
    src: shoes
  },
  title: 'title',
  type: 'type',
  price: '$1.0'
};

const ItemCardTemplate: ComponentStory<typeof ItemCard> = (args) => <ItemCard {...args} />;

export const Playground: ComponentStory<typeof ItemCard> = ItemCardTemplate.bind({});
Playground.args = itemCardProps;

export default {
  component: ItemCard,
  title: 'ui/cards/item card'
} as ComponentMeta<typeof ItemCard>;
