var webpack = require('webpack')

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/",
        filename: "water.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"]
                }
            },
        ]
    }
}
