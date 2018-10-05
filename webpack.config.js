const path = require( 'path' );
const VueLoaderPlugin = require( 'vue-loader/lib/plugin' );

module.exports = {

    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.join( __dirname, 'public' ),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join( __dirname, 'public' ),
        compress: true,
        port: 5000,
    },
    module: {
        rules: [ {
            test: /\.vue$/,
            loader: 'vue-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
              'vue-style-loader',
              'css-loader'
            ]
        } ]
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin()
    ]
};