const path = require("path");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = env => {
  if (env.modo !== "front") {
    return {
      entry: "./backend/index.js",
      output: {
        path: path.join(__dirname, "server"),
        filename: "server.js"
      },
      node: {
        fs: "empty",
        net: "empty",
        tls: "empty",
        dns: "empty"
      },
      target: "node",
      externals: [nodeExternals()],
      module: {
        rules: [
          {
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-react"]
              }
            },
            test: /\.js$/,

            exclude: /node_modules/
          }
        ]
      },
      plugins: [new LiveReloadPlugin(), new CleanWebpackPlugin()]
    };
  }
  return {
    entry: "./frontend/src/App.js",
    performance: { hints: false },
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "dist")
    },
    devtool: "source-map",
    resolve: {
      extensions: [".js", ".jsx"]
    },
    module: {
      rules: [
        {
          test: /(\.js|\.jsx)$/,
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          use: ["style-loader", "css-loader"],
          test: /\.css$/
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader"
            }
          ]
        }
      ]
    }
  };
};
