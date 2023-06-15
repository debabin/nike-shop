import type { Meta, StoryObj } from '@storybook/react';

import type { TypographyProps, TypographyTag } from './Typography';
import { Typography } from './Typography';

const typographiesProps: TypographyProps<TypographyTag>[] = [
  {
    children: 'title 1',
    variant: 'title-1'
  },
  {
    children: 'title 2',
    variant: 'title-2'
  },
  {
    children: 'title 3',
    variant: 'title-3'
  },
  {
    children: 'sub title',
    variant: 'sub-title'
  },
  {
    children: 'body 1',
    variant: 'body-1'
  },
  {
    children: 'body 2',
    variant: 'body-2'
  },
  {
    children: 'body 3',
    variant: 'body-3'
  },
  {
    children: 'link',
    variant: 'link'
  }
];

const typographyProps: TypographyProps<TypographyTag> = {
  children: 'typography',
  tag: 'div',
  variant: 'title-1'
};

type Story = StoryObj<typeof Typography>;
const TypographyTemplate: Story = { render: (args) => <Typography {...args} /> };

export const Playground = { ...TypographyTemplate };
Playground.args = typographyProps;

export const AllTypographies = () => (
  <>
    {typographiesProps.map((typographyProps) => (
      <Typography key={typographyProps.variant} {...typographyProps} />
    ))}
  </>
);

export default {
  component: Typography,
  title: 'ui/typography'
} as Meta<typeof Typography>;
