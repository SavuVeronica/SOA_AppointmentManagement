const HtmlWebpackPlugin = require('html-webpack-plugin');
const deps = require("./package.json").dependencies;
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  mode: 'development',
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },
  devServer: {
    port: 8084,
  },
  module: {
    rules: [
      {
        /* The following line to ask babel 
             to compile any file with extension
             .js */
        test: /\.js?$/,
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
        },
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
        name: 'MFE2',
        filename:
          'remoteEntry.js',
        exposes: {
          './ReminderList': './src/ReminderList',
          './RemindContext': './src/contexts/ReminderListContext',
          './RemindSocket': './src/contexts/SocketProvider'
        },
        shared: {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react
          },
          "react-dom": {
            singleton:true,
            requiredVersion: deps["react-dom"]
          }
        }
      }
    ),
    new HtmlWebpackPlugin({
      template:
        './public/index.html',
    }),
  ],
};