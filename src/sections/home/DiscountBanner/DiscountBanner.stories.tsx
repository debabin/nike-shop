import type { Meta, StoryObj } from '@storybook/react';

import { DiscountBanner } from './DiscountBanner';

type Story = StoryObj<typeof DiscountBanner>;
const DiscountBannerTemplate: Story = { render: (args) => <DiscountBanner {...args} /> };

export const Playground = { ...DiscountBannerTemplate };

export default {
  component: DiscountBanner,
  title: 'sections/discount banner'
} as Meta<typeof DiscountBanner>;
