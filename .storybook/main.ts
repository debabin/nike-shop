import * as path from 'path';

const config = {
  staticDirs: ['./public'],
  stories: ['../app/**/*.stories.mdx', '../app/**/*.stories.@(ts|tsx)'],
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
    name: '@storybook/nextjs',
    options: {}
  },
  core: {},
  webpackFinal: (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@/utils/helpers': path.resolve(__dirname, '../app/_src/utils/helpers'),
        '@/ui/icons': path.resolve(__dirname, '../app/_src/components/icons'),
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
