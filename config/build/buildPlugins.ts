import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import { IBuildOptions } from "./types/build";

function buildPlugins(options: IBuildOptions): webpack.WebpackPluginInstance[] {
  const { paths, isDev, apiURL, project } = options;

  const plugins = [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      IS_DEV: JSON.stringify(isDev),
      API_URL: JSON.stringify(apiURL),
      PROJECT: JSON.stringify(project),
    }),
    new CopyPlugin({
      patterns: [{ from: paths.locales, to: paths.buildLocales }],
    }),
  ];

  if (isDev) {
    plugins.push(
      new ReactRefreshWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new BundleAnalyzerPlugin({ openAnalyzer: false })
    );
  }

  return plugins;
}

export default buildPlugins;
