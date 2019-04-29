const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

const VueloaderPlugin = require('vue-loader/lib/plugin') //新版webpack中解决报错的方法

//配置文件
module.exports = {

    //入口文件
    entry: path.join(__dirname, './src/main.js'),

    //出口文件
    output: { //输出文件相关的配置
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: "index.html"
        }),
        new VueloaderPlugin() //新版webpack中解决报错的方法
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.(png|jpg|gif|jpeg)$/, use: ['url-loader?limit=7631&name=[hash:8]-[name].[ext]'] },
            { test: /\.(ttf|svg|woff|woff2|eot)$/, use: ['url-loader'] },
            { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
            { test: /\.vue$/, use: ['vue-loader'] }
        ]
    },
    // resolve: {
    //     alias: { //修改vue导入包时候的路径
    //         "vue$": "vue/dist/vue.js"
    //     }
    // },



    //模板
    mode: "development"
}