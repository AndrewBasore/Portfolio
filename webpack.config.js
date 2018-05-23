module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname + "/dist/",
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/, /dist/],
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}