# webpack的基本配置

```js
    const {resolve} = require('path')
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    const MiniCssExtractPlugin = require('mini-css-extract-plugin')
    const autoprefixer = require('autoprefixer')
    const VueLoaderPlugin = require('vue-loader/lib/plugin')
    module.exports={
        // 配置编译环境
        mode:'development',
        // 入口文件
        entry:{
            // 每个模块都要引入main.js 否则无法使用jquery和bootstrap
            index:['./src/js/main.js','./src/js/index.js']
        },
        // 输出路径
        output:{
            path:resolve(__dirname,'build'),
            filename:'js/[name].js' //对应多个输出文件
        },
        // 配置loader解析
        module:{
            rules:[
                // css
                {test:/\.css$/,use:[MiniCssExtractPlugin.loader,'css-loader']},
                //scss
                {test:/\.scss$/,use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader']},
                // 图片和字体
                {test:/\.(jpg|png|gif|bmp|ttf|eot|svg|woff|woff2)$/,type:'javascript/auto',loader:'url-loader',options:{
                    limit:8*1024,
                    esModule:false,
                    name:'images/[name].[ext]'
                }},
                // vue
                { test: /\.vue$/, loader: 'vue-loader' }
            ]
        },
        resolve:{
            // 配置别名
            alias:{
                '@':resolve('src')
            },
            // 配置省略的文件后缀名
            extensions:['.js','.scss','.css','.less','.json']
        },
        // 配置插件
        plugins:[
            // css兼容前缀
            autoprefixer,
            // vue
            new VueLoaderPlugin(),
            // html预览模板
            new HtmlWebpackPlugin({
                template:'./src/index.html',//模板路径
                filename:'index.html',//输出的文件名
                chunks:['index']//输出时关联的js文件名
            }),
            // 抽离css
            new MiniCssExtractPlugin({
                filename:'css/[name].css'
            })
        ]
    }
```