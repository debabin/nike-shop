import * as path from 'path';

const config = {
  staticDirs: ['./public'],
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
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  core: {},
  webpackFinal: (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/utils/helpers': path.resolve(__dirname, '../src/utils/helpers'),
        '@/ui': path.resolve(__dirname, '../src/components/common'),
        '@/ui/icons': path.resolve(__dirname, '../src/components/common/icons'),
        '@/.storybook': path.resolve(__dirname, './')
      };
    }
    return config;
  },
  docs: {
    autodocs: true
  }
};

export default config;
