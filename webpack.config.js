// webpack.config.js
module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist', // Note: Use path to specify output directory
    publicPath: 'dist/'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Apply Babel to JavaScript files
        exclude: /node_modules/, // Exclude node_modules folder
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] // Use Babel preset for ES2015+ features
          }
        }
      }
    ]
  }
};
