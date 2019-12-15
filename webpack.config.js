const path=require('path');
module.exports={
    mode: "development",
    entry:'./index.js',
    module:{
        rules:[
            //css
            {
                test:/\.css$/,
                use:["style-loader",
                    {
                        loader: "css-loader",
                    }],
                //exclude:path.resolve(__dirname, './node_modules'),
            },
            //babel
            {
                test:/\.js$/,
                //exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    },
                }
            },
            {
                test: /\.(eot|svg|png|PNG||jpeg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]',
                            outputPath:'',
                            publicPath:'./dist',
                        }
                    }
                ]
            },
            //html
            {
                test: /\.html$/,
                use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }]
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase:"./dist",
        compress: true,
        port: 9090,
        disableHostCheck: true
    },
    output: {
        // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: 'index.js',
        // 输出文件都放到 dist 目录下
        path: path.resolve(__dirname, './dist'),
    }
};