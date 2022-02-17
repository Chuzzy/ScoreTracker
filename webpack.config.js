const path = require("path");

const electronConfigs = {
  // Build Mode
  mode: "development",
  // Electron Entrypoint
  entry: "./src/main.ts",
  target: "electron-main",
  devtool: "source-map",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: /src/,
        use: [{ loader: "ts-loader" }],
      },
    ],
  },
  output: {
    path: __dirname + "/dist",
    filename: "main.js",
  },
};

const HtmlWebpackPlugin = require("html-webpack-plugin");

const reactConfigs = {
  mode: "development",
  entry: "./src/renderer.tsx",
  target: "electron-renderer",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist/renderer.js"),
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        include: /src/,
        use: [{ loader: "ts-loader" }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    path: __dirname + "/dist",
    filename: "renderer.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};

module.exports = [electronConfigs, reactConfigs];
