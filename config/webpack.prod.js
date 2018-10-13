const path = require('path');
const webpack = require('webpack');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    index: [
      path.join(__dirname, '../src/public/scripts/pramise.es'),
    ],
    tag: [
      path.join(__dirname, '../src/public/scripts/tag.es')

    ],
    star: [
      path.join(__dirname, '../src/public/scripts/star.es')
    ]
  },
  output: {
    filename: 'public/js/[name]-[hash:5].js',
    publicPath: 'http://localhost:8081/',
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
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"prod"',
    }),
    new LiveReloadPlugin({
      appendScriptTag: true
    }),
    new ExtractTextPlugin("public/css/[name]-[hash:5].css"),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', {
          discardComments: {
            removeAll: true
          }
        }],
      },
      canPrint: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'public/js/common/vendor-[hash:5].min.js',
    }),
    new HtmlWebpackPlugin({ // Also generate a test.html 
      filename: './views/layout.html',
      template: 'src/widget/layout.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({ // Also generate a test.html 
      filename: './views/index.html',
      template: 'src/views/index.js',
      inject: false,
      chunks: ['vendor', 'index', 'tag'],
    }),
    new HtmlWebpackPlugin({ // Also generate a test.html 
      filename: './widget/index.html',
      template: 'src/widget/index.html',
      inject: false,
    }),
    new HtmlWebpackPlugin({ // Also generate a test.html 
      filename: './views/star.html',
      template: 'src/views/star.js',
      inject: false,
      chunks: ['vendor', 'index', 'star'],
    }),
    new HtmlWebpackPlugin({ // Also generate a test.html 
      filename: './widget/star.html',
      template: 'src/widget/star.html',
      inject: false,
    })
  ]

};