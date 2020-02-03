const path = require("path");
const LiveReloadPlugin = require("webpack-livereload-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = env => {
  return {
    entry: "./" + env.entry,
    output: {
      path: path.join(__dirname, env.outpath),
      filename: env.filename
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
        }
      ]
    },
    plugins: [new LiveReloadPlugin()]
  };
};
