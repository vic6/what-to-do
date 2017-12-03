const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CSSExtract = new ExtractTextPlugin("styles.css");

module.exports = {
  entry: "./src/app.jsx",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.jsx?$/,
        exclude: /node_modules/
      },
      {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [CSSExtract],
  devtool: "cheap-module-eval-source-map",
  devServer: {
    publicPath: "/public/"
  }
};
