import webpack from "webpack";
import buildDevServer from "./buildDevServer";
import buildLoaders from "./buildLoader";
import buildPlugins from "./buildPlugins";
import buildResolvers from "./buildResolvers";
import { IBuildOptions } from "./types/build";

export function buildWebpackConfig(
  options: IBuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options;
  return {
    mode: mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    output: {
      filename: "[name].[contenthash].js",
      path: options.paths.build,
      clean: true,
      publicPath: "/",
    },
    plugins: buildPlugins(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
