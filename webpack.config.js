const path = require ('path')
const HtmlWebpackPlugin = require ('html-webpack-plugin')

module.exports = {
    entry: './src/app/index.js',
    output: {
        path: path.join(__dirname,'build'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8080
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}