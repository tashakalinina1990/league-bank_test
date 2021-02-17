const path = require('path');

module.exports = {
entry: './src/index.js',
mode: 'production',
output: {
  filename: 'bundle.js',
  path: path.resolve(__dirname, 'public')
},
devServer: {
  contentBase: path.resolve(__dirname, 'public'),
  open: false,
  port: 3000,
  historyApiFallback: true,
},
module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.s[ac]ss$/i,
      exclude: /node_modules/,
      use: [
        "style-loader",
        "css-loader",
        "sass-loader",
      ],
    },
    {
      test: /\.css$/i,
      use: [
        "style-loader",
        "css-loader",
      ],
    },
    {
      test: /\.(png|jpe?g|gif|svg)$/i,
      exclude: /node_modules/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/',
          }
        },
      ],
    },
    {
      test: /\.(woff(2)?|ttf)?$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          }
        }
      ]
    }
  ],
},
resolve: {
  extensions: ['.js', '.jsx']
},
devtool: 'source-map',
};
