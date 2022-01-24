const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:'development',
    entry: './main/main.js',
    output: {
    path: path.resolve(__dirname, 'public'),
      filename: 'dist.js',

  },
  plugins: [new MiniCssExtractPlugin()],
    
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
        },
       {
        test: /\.s[ac]ss$/i,
         use: [
         
          // Creates `style` nodes from JS strings
           
          // Translates CSS into CommonJS
           
          MiniCssExtractPlugin.loader,
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
        },
      
      ],
        
    }
};

