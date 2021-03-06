const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        'index': './src/index.js',
        'image': './src/image.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif)$/,
                type: "asset",
                parser: {
                    dataUrlCondition: {
                        maxSize: 3 * 1024 // 4kb
                    }
                }
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: `./index.html`,
            filename: `index.html`,
            chunks: ['index'],
            minify: false
        }),
        new HtmlWebpackPlugin({
            template: `./about.html`,
            filename: `about.html`,
            chunks: ['image', 'index'],
            minify: false
        })
    ]
};