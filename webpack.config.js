const HtmlWebpackPlugin = require('html-webpack-plugin') ; // 配置加载html魔板的html
const CleanWebpackPlugin = require('clean-webpack-plugin') ; // 自动删除打包目录
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 提取css到一个文件中去
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    // options: {
                    //     // you can specify a publicPath here
                    //     // by default it use publicPath in webpackOptions.output
                    //     publicPath: '../'
                    // }
                }, {
                    loader: 'css-loader',// 让我们可以使用import导入css文件
                    options: {
                        modules: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }
                ]
            }
        ]},
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin({
            //  你可以在这里指定一个publicPath
              //  默认情况下，它在webpackOptions.output中使用publicPath
            filename: "[name].css",
            chunkFilename: "[id].css"
          })

      ]

  };