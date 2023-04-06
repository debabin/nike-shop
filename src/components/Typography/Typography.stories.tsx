import type { ComponentMeta, ComponentStory } from '@storybook/react';

import type { TypographyProps } from './Typography';
import { Typography } from './Typography';

const typographiesProps: TypographyProps[] = [
  {
    children: 'title 1',
    variant: 'title-1'
  },
  {
    children: 'title 2',
    variant: 'title-2'
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

const TypographyTemplate: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

const typographyProps: TypographyProps = {
  children: 'typography',
  tag: 'div',
  variant: 'title-1'
};
export const Playground: ComponentStory<typeof Typography> = TypographyTemplate.bind({});
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
} as ComponentMeta<typeof Typography>;
