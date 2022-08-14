const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/index.ts",  // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js" //打包文件
    },
    module: {
        rules: [
            {
                // 规则生效的文件
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Snake",
        template: './src/index.html'
    })],
    resolve: {
        extensions: ['.ts', '.js']
    },
    mode: "development"
}