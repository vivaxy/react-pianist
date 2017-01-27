/**
 * @since 2016-05-29 10:50
 * @author vivaxy
 */

'use strict';

const ip = require('ip');
const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const Visualizer = require('webpack-visualizer-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEVELOPMENT_IP = ip.address();
const DEVELOPMENT_PORT = Math.floor(Math.random() * 65536);
const SOURCE_PATH = 'docs-source';
const RELEASE_PATH = 'docs';
const DEVELOPMENT = 'development';
const PRODUCTION = 'production';
const COMMON_CHUNK_NAME = 'common';

const BANNER = '@2016 vivaxy';

const NODE_ENV = process.env.NODE_ENV || PRODUCTION;

const jsLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: [
        'babel-loader',
    ],
};

const cssLoader = {
    test: /\.css$/,
    loaders: [
        'style-loader',
        'css-loader',
    ],
};

const lessLoader = {
    test: /\.less$/,
    loaders: [
        'style-loader',
        'css-loader',
        'less-loader',
    ],
};

const jsonLoader = {
    test: /\.json$/,
    loaders: [
        'json-loader',
    ],
};

const imageLoader = {
    test: /\.(png|jpg|gif)$/,
    loaders: [
        'url-loader?limit=8192&name=image/[name]-[hash].[ext]',
    ],
};

// default webpack config
const webpackConfig = {
    entry: {
        [COMMON_CHUNK_NAME]: [
            `babel-polyfill`,
            `whatwg-fetch`,
            `react`,
            `react-dom`,
            `redux`,
            `react-redux`,
        ],
    },
    output: {
        path: path.resolve(__dirname, `${RELEASE_PATH}`),
        filename: 'js/[name].js',
        publicPath: '../',
    },
    module: {
        loaders: [
            jsLoader,
            cssLoader,
            lessLoader,
            jsonLoader,
            imageLoader,
        ],
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: COMMON_CHUNK_NAME,
            filename: 'js/[name].js',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(NODE_ENV),
            },
        }),
        new Visualizer(),
    ],
    resolve: {
        alias: {
            // react-pianist requires will be searched in source folder, not in node_modules
            'react-pianist': path.resolve(__dirname, './source'),
        },
    },
};

// get entry
const entryFileNameList = glob.sync(path.join(SOURCE_PATH, 'entry') + '/*.js');
const entryNameList = entryFileNameList.map((entryFileName) => {
    return path.basename(entryFileName, '.js');
});

// set entry
entryNameList.forEach((entryName) => {
    webpackConfig.entry[entryName] = [
        path.join(__dirname, `./${SOURCE_PATH}/entry/${entryName}.js`)
    ];

    webpackConfig.plugins.push(new HtmlWebpackPlugin({
        template: `${SOURCE_PATH}/html/template.html`,
        filename: `html/${entryName}.html`,
        hash: true,
        inject: 'body',
        chunks: [
            COMMON_CHUNK_NAME,
            entryName,
        ],
    }));
});

// set config according to environment
switch (NODE_ENV) {
    case DEVELOPMENT:

        jsLoader.loaders.push('react-hot-loader/webpack');

        entryNameList.forEach((entryName) => {
            webpackConfig.entry[entryName].unshift(`webpack-dev-server/client?http://${DEVELOPMENT_IP}:` + DEVELOPMENT_PORT);
            webpackConfig.entry[entryName].unshift('webpack/hot/log-apply-result');
            webpackConfig.entry[entryName].unshift('webpack/hot/only-dev-server');
            webpackConfig.entry[entryName].unshift('react-hot-loader/patch');
        });

        webpackConfig.devtool = 'eval';

        webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

        break;
    case PRODUCTION:
        webpackConfig.devtool = 'source-map';
        webpackConfig.plugins.push(new webpack.BannerPlugin(BANNER));
        // webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
        webpackConfig.plugins.push(new webpack.optimize.DedupePlugin());
        break;
    default:
        throw new Error('NODE_ENV not found, NODE_ENV=' + NODE_ENV);
}

webpackConfig.RELEASE_PATH = RELEASE_PATH;
webpackConfig.DEVELOPMENT_IP = DEVELOPMENT_IP;
webpackConfig.DEVELOPMENT_PORT = DEVELOPMENT_PORT;

module.exports = webpackConfig;
