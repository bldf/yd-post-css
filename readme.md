## 结合webpack配置 post-css 
 ### 安装
 
```
"css-loader": "^1.0.1",
"postcss-loader": "^3.0.0",
"postcss-preset-env": "^6.4.0",
```
### 配置postcss.config.js

```
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
    // parser: 'sugarss',
    plugins: {
        "postcss-preset-env":{
            stage: 3,
            features: {
              'nesting-rules': true,
              'color-mod-function': { unresolved: 'warn' }
            }
        }
    }
  }
```
### 配置webpack: 

```
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
                        importLoaders: 1
                        // modules: true,
                        // localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        // localIdentName: '[local]'
                    }
                },'postcss-loader'
                ]
            }
        ]},
```


1: cssNext :　编译用postCss  
2: 
1. 多样选择器
2. 使用1倍图和2倍图
3. img少用， 尽量使用css ，图片会发请求
4. 滤镜
5. css也进入正则匹配阶段了
6. 默认字体
7. 

 css 命名规则    BEM
-
2个中划线代表状态
2个下划线代表选择器

ACSS
- 