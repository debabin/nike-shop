import type { StoryObj, Meta } from '@storybook/react';

import type { GalleryProps } from './Gallery';
import { Gallery } from './Gallery';

import shoes from '@/.storybook/public/assets/images/shoes.webp';

const galleryProps: GalleryProps = {
  images: [
    {
      alt: '1',
      src: shoes
    },
    {
      alt: '2',
      src: shoes
    },
    {
      alt: '3',
      src: shoes
    }
  ]
};

type Story = StoryObj<typeof Gallery>;
const GalleryTemplate: Story = { render: (args) => <Gallery {...args} /> };

export const Playground = { ...GalleryTemplate };
Playground.args = galleryProps;

export default {
  component: Gallery,
  title: 'ui/gallery'
} as Meta<typeof Gallery>;
