module.exports = {
    entry: './src/app.js',
    output: {
        path: './build',
        filename: 'bundle.js',
        publicPath: './build/'
    },

    devtool: 'inline-source-map',

    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader' }
        ]
    }
};
