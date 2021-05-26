const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const host = 'localhost';
const port = 3000;

module.exports = {

    mode: "development",

    devtool: "source-map",

    devServer: {
        port: port,
        host: host,
        historyApiFallback: {
            disableDotRule: true
        },
    },
    entry: {
       ui: ['./entrypoints/App.tsx', './src/styles/style.scss'],
    },
    output: {
        filename: './assets/js/[name].js',
        path: path.join(process.cwd(), 'dist'),
        publicPath: ''
    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                loader: 'tslint-loader'
            },
            {
                test: /\.tsx?$/,
                use: ["awesome-typescript-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        // Interprets CSS
                        loader: "css-loader",
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'sass-loader'
                    },
                ]
            },
            /**
             * CSS loader support for *.css files
             */
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../images/'
                        }
                    }
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: [path.resolve('./src'), 'node_modules']
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test app',
            filename: 'index.html',
            xhtml: true,
            template: './entrypoints/index.html',
        }),
        new MiniCssExtractPlugin(
            {
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "./assets/css/style.css",
                allChunks: true,
            }
        ),
        new CopyPlugin({
            patterns: [
                {
                    from: './images',
                    to: './assets/images',
                },
            ],
        }),
    ],
};
