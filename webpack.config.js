/**
 * @since 2016-05-29 10:50
 * @author vivaxy
 */

'use strict';

const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEVELOPMENT_IP = '0.0.0.0';
const DEVELOPMENT_PORT = 8085;
const SOURCE_PATH = 'docs/source';
const RELEASE_PATH = 'docs/release';
const DEVELOPMENT = 'development';
const PRODUCTION = 'production';
const COMMON_CHUNK_NAME = 'common';

const BANNER = '@2016 vivaxy';

const NODE_ENV = process.env.NODE_ENV || PRODUCTION;

const jsLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    loaders: [
        'babel'
    ]
};

// default webpack config
const webpackConfig = {
    entry: {
        [COMMON_CHUNK_NAME]: [
            'whatwg-fetch',
            'react',
            'react-dom',
            'redux',
            'react-redux',
        ],
    },
    output: {
        path: path.resolve(__dirname, `${RELEASE_PATH}`),
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            jsLoader,
            {
                test: /\.css$/,
                loaders: [
                    'style',
                    'css',
                ]
            },
            {
                test: /\.less$/,
                loaders: [
                    'style',
                    'css',
                    'less',
                ]
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=8192&name=image/[name]-[hash].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: COMMON_CHUNK_NAME,
            filename: 'js/[name].js'
        })
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
            entryName
        ]
    }));
});

// set config according to environment
switch (NODE_ENV) {
    case DEVELOPMENT:

        jsLoader.loaders.push('react-hot-loader/webpack');

        webpackConfig.output.publicPath = `/${RELEASE_PATH}/`;

        entryNameList.forEach((entryName) => {
            webpackConfig.entry[entryName].unshift(`webpack-dev-server/client?http://${DEVELOPMENT_IP}:` + DEVELOPMENT_PORT);
            webpackConfig.entry[entryName].unshift('webpack/hot/log-apply-result');
            webpackConfig.entry[entryName].unshift('webpack/hot/only-dev-server');
            webpackConfig.entry[entryName].unshift('react-hot-loader/patch');
        });

        webpackConfig.devtool = 'eval';

        webpackConfig.devServer = {
            hot: true,
            historyApiFallback: true,
            host: DEVELOPMENT_IP,
            port: DEVELOPMENT_PORT,
            stats: {
                colors: true
            }
        };

        webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());

        break;
    case PRODUCTION:
        webpackConfig.output.publicPath = '../';
        webpackConfig.devtool = 'source-map';
        webpackConfig.plugins.push(new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(PRODUCTION)
            }
        }));
        webpackConfig.plugins.push(new webpack.BannerPlugin(BANNER));
        // webpackConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
        webpackConfig.plugins.push(new webpack.optimize.DedupePlugin());
        break;
    default:
        throw new Error('NODE_ENV not found, NODE_ENV=' + NODE_ENV);
}

module.exports = webpackConfig;
