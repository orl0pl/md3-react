const path = require('path')
var DeclarationBundlerPlugin = require('types-webpack-bundler');

module.exports = {
    target: 'node',
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
                use: ["ts-loader"],
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        react: 'react',
        'prop-types': 'prop-types'
    },
    resolve: {
        extensions: [".tsx", ".ts"]
    },
    plugins: [new DeclarationBundlerPlugin({
            moduleName:'\'md3-react\'',
            out:'./index.d.ts',
        })],
}