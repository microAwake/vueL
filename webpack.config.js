//这个配置文件是js文件，通过Node模块操作，向外面暴露了一个配置对象
const path=require('path')
const webpack=require('webpack')
//导入在内存中生成HTML页面的插件，只要是插件都要放到plugins里面
const htmlWepackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin =require('vue-loader/lib/plugin')
module.exports={
    mode: 'development',
    //指定入口文件
    entry:path.join(__dirname,'./src/main.js'),
    output: {
        //指定输出文件地址
        path: path.join(__dirname,'./dist'),
        //指定输出文件名
        filename: 'bundle.js'
    },
    devServer: {
    //    "dev": "webpack-dev-server --open --port 3030 --contentBase src --hot"
        open:true,//自动打开浏览器
        port:3030,//设置端口号
        //contentBase:'src',//设置托管根目录
        hot:true//设置热加载
    },
    plugins:[
        //new 一个热更新的模块对象
        new webpack.HotModuleReplacementPlugin(),
        //使用html-webpack-plugin插件后，不需要手动去处理script的引入路径
        new htmlWepackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        rules:[
            //用什么loader来处理什么样的文件，use中加载器的处理过程是从后往前的
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            //limit作限制，大于这个值bytes的图片名不作hash处理，防止重名;name处表示给图片命名
            {test:/\.(jpg|png|gif|bmp|jpeg|eof|ttf)$/,use:'url-loader?limit=53281&name=[hash:8]-[name].[ext]'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            //默认webpack不能处理vue文件，需要安装vue-loader
            {test:/\.vue$/,use:'vue-loader'}

        ]
    },
    resolve: {
        alias: {
            // 'vue$':'../node_modules/vue/dist/vue.js'
        }
    }


}