const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin'); //监控文件变化，自动刷新浏览器
const ExtracTextPlugin = require('extract-text-webpack-plugin'); //css代码提取
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html，自动注入引用文件
const Manifest = require('webpack-manifest');

module.exports = {
    entry: {
        index: [
            path.join(__dirname, '../src/public/js/pramise.es')
        ],
        tag: [
            path.join(__dirname, '../src/public/js/tag.es')
        ],
        star: [
            path.join(__dirname, '../src/public/js/star.es')
        ]
    },
    output: {
        filename: 'public/js/[name]-[hash:5].js',
        path: path.join(__dirname, '../build')
    },
    module: {
        rules: [{
                test: /\.es$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-0']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtracTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            }

        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': 'dev',
        }), //定义全局开关变量
        new LiveReloadPlugin({
            appendScriptTag: true //自动的添加到head中
        }),
        new ExtracTextPlugin("public/css/[name]-[hash:5].css"), //提取css
        new webpack.optimize.CommonsChunkPlugin({ //提取公共文件
            name: 'vendor',
            filename: 'public/js/common/vendor-[hash:5].min.js' //路径前会拼接output设置的path路径
        }),
        new HtmlWebpackPlugin({
            filename: './views/layout.html', //编译后的文件，前边衔接的是output的path,就是编译后会输出到build/views/layout.html
            template: 'src/widget/layout.html', //编译前的模板文件
            inject: false //禁止注入，因为模板文件不需要注入，注入到相应的页面就行，要不会重复
        }),

        new HtmlWebpackPlugin({
            filename: './views/index.html',
            template: 'src/views/index.js', //大拇指页面
            inject: false,
            chunks: ['vendor', 'index', 'tag'] //要注入的文件
        }),
        new HtmlWebpackPlugin({
            filename: './widget/index.html', //大拇指页面
            template: 'src/widget/index.html',
            nject: false
        }),

        new HtmlWebpackPlugin({
            filename: './views/star.html',
            template: 'src/views/star.js', //大拇指页面
            inject: false,
            chunks: ['vendor', 'index', 'star'] //要注入的文件
        }),
        new HtmlWebpackPlugin({
            filename: './widget/star.html', //大拇指页面
            template: 'src/widget/star.html',
            nject: false
        }),
        new Manifest({ //
            cache: [
                //需要缓存的内容
                './public/css/vendor.css'
            ],
            timestamp: true,
            filename: 'cache.manifest',
            network: [
                ' *'
            ],
            headcomment: "pracitce_third",
            master: ['./views/layout.html']
        })

    ]
};