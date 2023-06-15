import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { IBuildPaths } from "../types/build";

export const buildCssLoader = (isDev: boolean, paths: IBuildPaths) => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      // "css-loader",
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
          },
        },
      },
      // Compiles Sass to CSS
      {
        loader: "sass-loader",
        options: {
          sassOptions: {
            includePaths: [paths.scssGlobal],
          },
        },
      },
    ],
  };
};
