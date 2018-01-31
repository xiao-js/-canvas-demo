var webpack = require('webpack')

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/",
        filename: "2048.js"
    },

    // module: {
    //     loaders: [
    //         {
    //             test: /\.js$/,
    //             exclude: /node_modules/,
    //             loader: "babel-loader",
    //             query: {
    //                 presets: ["es2015", "react"]
    //             }
    //         },
    //     ]
    // }
}