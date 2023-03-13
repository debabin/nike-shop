"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var config = {
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
    webpackFinal: function (config) {
        if (config.resolve) {
            config.resolve.alias = __assign({}, config.resolve.alias);
        }
        return config;
    }
};
exports["default"] = config;
