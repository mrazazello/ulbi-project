import { RuleSetRule } from "webpack";
import { buildBabelLoader } from "./loaders/babelLoader";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";
import { IBuildOptions } from "./types/build";

function buildLoaders(options: IBuildOptions): RuleSetRule[] {
  const { paths, isDev } = options;

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: ["file-loader"],
  };

  const svgLoader = buildSvgLoader();
  const babelLoader = buildBabelLoader(isDev);
  const cssLoader = buildCssLoader(true, paths);

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, cssLoader, babelLoader, tsLoader];
}

export default buildLoaders;
