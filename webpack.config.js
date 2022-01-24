const path = require('path');

module.exports = {
    mode:'development',
    entry: './main/main.js',
    output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'dist.js',
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }],
        
    }
};

