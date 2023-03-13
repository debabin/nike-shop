import * as path from 'path';
import { StorybookConfig } from '@storybook/core-common';

const config: StorybookConfig = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y'
  ],
  framework: '@storybook/react',
  features: {
    modernInlineRender: true,
    previewMdx2: true
  },
  core: {
    builder: '@storybook/builder-webpack5'
  },
  webpackFinal: (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias
      };
    }

    return config;
  }
};

export default config;
