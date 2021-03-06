const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    entry: {
        a: ['jquery', 'bootstrap', 'popper.js'],
        b: ['react', 'react-dom'],
        main: './src/index.js'
    },

    devServer: {
      contentBase: path.join(__dirname, "dist"),
      compress: true,
      hot: true,
      historyApiFallback: true
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[hash].js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
                options: {
                  name: '[hash].[ext]',
                  outputPath: './fonts/' //where the files will go
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: './images/'
                }
            },
            {
                test: /\.css$/,
                loader: process.env.NODE_ENV === 'production' ?
                  ExtractTextPlugin.extract({
                    use: 'css-loader',
                    publicPath: '.'
                  }) :
                  ['style-loader', 'css-loader']
            }
        ],
    },

    plugins: [
        new HtmlPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new CleanPlugin(['dist']),
        new ExtractTextPlugin("css/[hash].css"),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['common', 'a', 'b'],
            filename: 'js/[name][hash].js'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
