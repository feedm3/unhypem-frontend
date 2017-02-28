'use strict';

require('dotenv').config();
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [];
let devtool = 'cheap-module-source-map';

plugins.push(new ExtractTextPlugin({
    filename: 'styles.css',
    allChunks: true
}));
plugins.push(new webpack.IgnorePlugin(/(locale)/, /node_modules.+(momentjs)/));

if (process.env.NODE_ENV === 'production') {
    devtool = 'source-map';

    plugins.push(new webpack.optimize.UglifyJsPlugin({
        beautify: false,
        mangle: {
            screw_ie8: true,
            keep_fnames: true
        },
        compress: {
            screw_ie8: true,
            warnings: false
        },
        comments: false,
        sourceMap: true
    }));
    plugins.push(new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }));
    plugins.push(new webpack.optimize.OccurrenceOrderPlugin());
    plugins.push(new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify('production')}}));
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
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"})
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader?' + JSON.stringify({
                    name: '[name]_[hash]'
                })
            },
            {
                test: /\.(png|woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    }
};
