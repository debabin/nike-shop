import type { Meta, StoryObj } from '@storybook/react';


import type { FigureProps } from './Figure';
import { Figure } from './Figure';

import shoes from '@/.storybook/public/assets/images/shoes.webp';

const figureProps: FigureProps = {
  image: {
    alt: 'image',
    src: shoes
  },
  caption: 'Hundreds of Workouts, Breathwork and More',
  buttons: [
    {
      children: 'Nike Training Club'
    }
  ]
};

type Story = StoryObj<typeof Figure>;
const FigureTemplate: Story = { render: (args) => <Figure {...args} /> };

export const Playground = { ...FigureTemplate };
Playground.args = figureProps;

export default {
  component: Figure,
  title: 'ui/figure',
  decorators: [
    (Story) => (
      <div style={{ width: '700px', height: '400px' }}>
        <Story />
      </div>
    )
  ]
} as Meta<typeof Figure>;
