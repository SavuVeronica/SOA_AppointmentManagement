const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const webpack = require('webpack'); //to access built-in plugins
require('dotenv').config({ path: './.env' }); 
const deps = require("./package.json").dependencies;
module.exports = {
  mode: 'development',
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  devServer: {
    port: 8085,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        /* The following line to ask babel 
             to compile any file with extension
             .js */
        test: /\.js$|jsx/,
        /* exclude node_modules directory from babel. 
            Babel will not compile any files in this directory*/
        exclude: /node_modules/,
        // To Use babel Loader
        loader:
          'babel-loader',
        options: {
          presets: [
            '@babel/preset-env' /* to transfer any advansed ES to ES5 */,
            '@babel/preset-react',
          ], // to compile react to ES5
        }
      },
      {
        test: /\.css$/,
        use: [
          // [style-loader](/loaders/style-loader)
          { loader: "style-loader" },
          // [css-loader](/loaders/css-loader)
          {
            loader: "css-loader",
            options: {
              modules: false,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin(
      {
        name: 'MFE1',
        filename:
          'remoteEntry.js',
        remotes: {
          MFE1:
            'MFE1@http://localhost:8083/remoteEntry.js',
          MFE2:
            'MFE2@http://localhost:8084/remoteEntry.js',
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: deps["react-dom"],
          },
        },
      }
    ),
    new HtmlWebpackPlugin({
      template:
        './public/index.html',
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env)
    })
  ],
};