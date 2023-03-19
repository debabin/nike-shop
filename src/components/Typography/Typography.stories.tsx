import { ComponentMeta, ComponentStory } from '@storybook/react';

import type { TypographyProps } from './Typography';
import { Typography } from './Typography';

const typographiesProps: TypographyProps[] = [
  {
    children: 'title 1',
    variant: 'title-1'
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
