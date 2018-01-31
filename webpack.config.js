var webpack = require('webpack')

module.exports = {
    entry: "./index.js",
    output: {
        path: __dirname + "/",
        filename: "game.js"
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
            // {
            //     test: /\.css$/,
            //     loader: "style-loader!css-loader"
            // }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
//    plugins:[
//    new webpack.DefinePlugin({
//        'process.env':{
//            NODE_ENV: JSON.stringify('production')
//        }
//    }),
//    new webpack.optimize.UglifyJsPlugin()
//    ]
}
