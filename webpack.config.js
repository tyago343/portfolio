const path = require("path");
const LiveReloadPlugin = require("webpack-livereload-plugin");
module.exports = env => {
  return {
    entry: "./" + env.entry,
    output: {
      path: path.join(__dirname, env.outpath),
      filename: env.filename
    },
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
