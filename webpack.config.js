const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const devMode = process.env.NODE_ENV !== "production";


module.exports = {
    entry: './src/index.js',
    output: {
        filename: devMode ? "bundle.js" : 'bundle.[contenthash].js',
        chunkFilename: devMode ? "[id].js" : "[id].[contenthash].js",
        path: path.resolve(__dirname, './dist'),
    },
    mode: 'development',
    optimization: {
        minimize: !devMode,
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
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
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
        new MiniCssExtractPlugin({
            filename: devMode ? "styles.css" : "styles.[contenthash].css",
            chunkFilename: devMode ? "[id].css" : "[id].[contenthash].css",
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            minify: false
        })
    ]
};