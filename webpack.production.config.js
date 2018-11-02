var path = require('path');
var webpack = require('webpack');

var phaserModule = path.join(__dirname, '/node_modules/phaser/')
var phaser = path.join(phaserModule, 'src/phaser.js')

const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    entry: {
        app: ['./node_modules/phaser/dist/phaser.js','./src/main.js'],
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist/loteria'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin(
            [ { from: './assets', to: './assets'} ]
        )
    ]
};
