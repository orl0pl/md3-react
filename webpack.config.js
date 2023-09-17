const path = require('path')
var DeclarationBundlerPlugin = require('types-webpack-bundler');

module.exports = {
    entry: './src/index.ts',
    mode: 'production',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: "umd",
        library: "md3-react",
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: ["ts-loader"]
            }
        ]
    },
    externals: {
        react: 'react'
    },
    resolve: {
        extensions: [".tsx", ".ts"]
    },
    plugins: [new DeclarationBundlerPlugin({
            moduleName:'\'md3-react\'',
            out:'./index.d.ts',
        })],
}