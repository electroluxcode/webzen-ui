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
        webzenUI:"./src/index.ts",
        webzenUIAsync:"./src/index_async.ts",
    },
    output: {
        publicPath:"",
        path: path.resolve(__dirname, '../dist'), //打包后的文件存放的地方
        filename: '[name].min.js', //打包后输出文件的文件名
        library:"[name]",  //类库名称。调用.可以直接输出html的名字
        libraryTarget:"umd",  //指定输出格式 ejs commonjs umd amd
        // umdNamedDefine:true, //会对UMD的构建过程中的AMD模块进行命名，否则就使用匿名的define
        libraryExport: 'default', // 增加这个属性
        chunkFilename: "./build/[name].min.js", // 异步加载的属性
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
              {
        test: /\.css$/, // 匹配哪些文件(后缀是.css的文件)
        // 先用css-laoder加载css文件，再用style-loader加载到页面上
        // 重要：生产模式不能够用 style-loader，智能开发模式用
        // {
        //   loader: , MiniCssExtractPlugin.loader
        // },
        //  Option:{

        // }

        // {
        //   loader: "style-loader",
        //   options: {
        //     esModule: true,  // 支持通过esModule导入的样式
        //   }

        // },
        use: [
       
          // {
          //   loader: "postcss-loader",

          // },
          
          {
            // assert: { type: "css" },
            loader: "css-loader",
            options: {
              exportType: "string",
            },
          },
          
        ],
        /* use的值：
         * 1、直接写字符串：适用于只需要一个laoder
         * 2、数组：多个loader：加载的顺序是：从右往左
         * 3、对象：需要单独配置属性值
         */
        exclude: /node-modules/, // 不会去加载node-modules中的less文件
      },
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
