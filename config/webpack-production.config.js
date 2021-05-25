const webpack = require('webpack');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack-base.config.js');

module.exports = merge(commonConfig, {

    mode: "production",

    plugins: [
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
    ],
    optimization: {
        noEmitOnErrors: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            },
        },
    }
});
