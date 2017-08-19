const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: './src/index.js'
    },

    devServer: {
      hot: true
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].js'
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
                  outputPath: 'fonts/' //where the files will go
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css-loader')
            }
        ],
    },

    plugins: [
        new HtmlPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new ExtractTextPlugin("[hash].css"),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}
