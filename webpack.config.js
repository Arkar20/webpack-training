const path = require('path');

module.exports = {
    mode:'development',
    entry: './main/main.js',
    output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'dist.js',
    },
    module: {
         rules: [{ test: /\.css$/, use: 'css-loader' }],
    }
};

