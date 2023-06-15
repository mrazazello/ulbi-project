import { RuleSetRule } from "webpack";
import { IBuildOptions } from "./types/build";
import { buildCssLoader } from "./loaders/buildCssLoader";
import { buildSvgLoader } from "./loaders/buildSvgLoader";

function buildLoaders({ paths }: IBuildOptions): RuleSetRule[] {
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: ["file-loader"],
  };

  const svgLoader = buildSvgLoader();

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  };

  const cssLoader = buildCssLoader(true, paths);

  const tsLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [fileLoader, svgLoader, cssLoader, babelLoader, tsLoader];
}

export default buildLoaders;
