import * as path from 'path';
import { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: true
      }
    }
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/utils/helpers': path.resolve(__dirname, '../src/utils/helpers'),
        '@/ui/icons': path.resolve(__dirname, '../src/components/icons')
      };
    }

    return config;
  }
};

export default config;
