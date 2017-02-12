'use strict';

require('dotenv').config();

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SvgStore = require('webpack-svgstore-plugin');

const plugins = [];
let devtool = 'eval-source-map';

plugins.push(new ExtractTextPlugin('styles.css', {
    publicPath: '/styles/',
    allChunks: true
}));
plugins.push(new SvgStore(
    path.join(__dirname, '/src/assets', '**/*.svg'), // input path
    '', // output path
    {
        name: '[hash].sprite.svg',
        chunk: 'main',
        prefix: ''
    }
));

if (process.env.NODE_ENV === 'production') {
    plugins.push(new webpack.optimize.UglifyJsPlugin({minimize: true, compress: {warnings: false}}));
    plugins.push(new webpack.optimize.DedupePlugin());
    plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    plugins.push(new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}}));
    devtool = 'source-map';
}

module.exports = {
    devtool: devtool,
    entry: [
        './src/app/main.js'
    ],
    output: {
        path: path.resolve(__dirname, './www'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        port: 3333,
        contentBase: 'src'
    },
    plugins: plugins,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.(png|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }
};
