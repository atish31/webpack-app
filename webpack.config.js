const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
// const webpackMerge = require("webpack-merge");
module.exports = ({mode, presets} = {mode: "production", presets: []}) => {
    console.log(mode, 'env')
    return {
        mode,
        output: {
            filename: 'bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin(), 
            new webpack.ProgressPlugin()
        ]
    };

};


