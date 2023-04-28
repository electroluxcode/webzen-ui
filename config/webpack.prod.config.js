/*
* webpack 配置
*/
var webpack = require("webpack");
var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var fileVersion = new Date().getTime();
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {   
    // mode : 'development',production
    mode:"production",
    entry:{
        "webzenUI":'./src/index.ts'
    },
    output: {
        publicPath:"",
        path: path.resolve(__dirname, '../dist'), //打包后的文件存放的地方
        filename: '[name].min.js', //打包后输出文件的文件名
        library:"webzenUI",  //类库名称。调用.可以直接输出html的名字
        libraryTarget:"umd",  //指定输出格式 ejs commonjs umd amd
        // umdNamedDefine:true, //会对UMD的构建过程中的AMD模块进行命名，否则就使用匿名的define
        libraryExport: 'default', // 增加这个属性
    },
    resolve: {
        extensions: ['.ts','tsx','.js'],
        
    },
    externals: {
        // 'path':'require("path")',
       
    },
 
    // target:"es2017",
    module: {        
        rules: [
            // {
            //     test: /\.js$/,
            //     use: {
            //         loader: 'babel-loader',
            //         options: {
            //             presets: ['es2015','stage-0'],
            //             plugins: ['transform-runtime']
            //         }
            //     },
            //     exclude: /node_modules/
            // },
            {
                test:/\.ts?$/,
                use:'ts-loader',
                exclude: /node_modules/
            }
            
        ]
    },

    plugins: [

        // new CleanWebpackPlugin(),
        
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV':  JSON.stringify(process.env.NODE_ENV),
        //     },
        //     fileVersion:fileVersion //文件版本
        // }),
        
        //压缩配置  用Terser代替
        // new TerserPlugin({
        //     cache: true,
        //     parallel: true,
        //     sourceMap: true,
        //   }),
        
    ]

}
