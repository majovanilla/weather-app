const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin'); //requiring plugin
// const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //requiring plugin

module.exports = {
  entry: {
    app: './src/js/index.js',
  },
  devServer: {
    contentBase: './dist',
  },
  output: {
    filename: 'main.js', // [name] will generate automatically all the needed files
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'http://localhost:8080/',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            // options: {
            //   esModule: false,
            //   outputPath: 'img',
            //   publicPath: 'img',
            //   name: '[name].[ext]',
            // },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader',
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
};
