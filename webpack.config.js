const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const glob = require('glob');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');



module.exports = {
    mode:'development',
  entry: {
    main: './main/main.js',
      
  },
    output: {
    path: path.resolve(__dirname, 'public'),
      filename: '[name].[chunkhash].js',

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
        
  },
  optimization: {
     splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    },
    
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new PurgeCSSPlugin({
      paths: glob.sync(path.join(__dirname,'index.html') ,  { nodir: true }),
    }),
    new CleanWebpackPlugin(),
    ]
};

