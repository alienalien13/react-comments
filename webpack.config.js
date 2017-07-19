const path = require('path'),
  htmlWebpackPlugin = require('html-webpack-plugin'),
  webpack = require('webpack'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  UglyJs = require('uglifyjs-webpack-plugin')

const hot = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-dev-server/client?http://localhost:3000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates

    './src/index.js'
    // the entry point of our app
  ],

  output: {
    filename: 'bundle.js',
    // the output bundle

    path: path.resolve(__dirname, 'dist'),

    //publicPath: '/static/'
    // necessary for HMR to know where to load the hot update chunks
  },

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options:{
					pretty: true
				}
			},
			{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader'
          ]
        })
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally

    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates

    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
    new htmlWebpackPlugin({
			name: 'index.html',
			template: './src/main.pug'
		}),
    new ExtractTextPlugin('./style.css'),
    new webpack.ProvidePlugin({ // inject ES5 modules as global vars
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Tether: 'tether'
    })
  ],

  devServer: {
    host: 'localhost',
    port: 3000,

    //historyApiFallback: true,
    // respond to 404s with index.html

    hot: true
    // enable HMR on the server
  }
}

const prod = {
  entry: ['./src/index.js'],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options:{
					pretty: true
				}
			},
			{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'postcss-loader'
          ]
        })
      }
    ]
  },

  plugins: [
    new htmlWebpackPlugin({
			name: 'index.html',
      template: './src/main.pug',
      minify: {
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        removeComments: true        
      }
		}),
    new ExtractTextPlugin('./style.css'),
    new UglyJs({
      comments: false
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Tether: 'tether'
    })
  ]
}

module.exports = function(env){
  if(env === 'development'){
    return hot;
  }else if(env === 'production'){
    return prod;
  }
}