const autoprefixer = require('autoprefixer');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const path = require('path');
const merge = require('webpack-merge');

const ALIASES = require('./config/aliases.js');

const TOKENS_PATH = path.resolve(__dirname, './public/tokens.json');

const initExport = {
  webpack: (config, options) => {

    return merge(config, {
      resolve: {
        alias: ALIASES,
      },
      module: {
        rules: [
          {
            test: /\.(png|jpg|gif|eot|ttf|woff|woff2)$/,
            use: {
              loader: 'url-loader',
              options: {
                limit: 100000
              }
            }
          }, {
            test: /\.svg$/,
            use: [{
              loader: 'react-svg-loader',
            }],
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader: "@epegzz/sass-vars-loader",
                options: {
                  syntax: 'scss',
                  files: [
                    TOKENS_PATH
                  ],
                },
              },
            ],
          },
        ],
      },
    });

    return config
  },
};

module.exports = withCSS(
  withSass(initExport, {
    postcssLoaderOptions: { parser: true, autoprefixer: true },
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 2,
      localIdentName: '[local]___[hash:base64:5]',
    },
  }),
);
