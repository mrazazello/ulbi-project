import path from "path";
import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import {
  BuildModeType,
  IBuildEnv,
  IBuildPaths,
} from "./config/build/types/build";

export default (env: IBuildEnv): webpack.Configuration => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    scssGlobal: path.resolve(__dirname, "src", "app", "styles"),
  };

  const mode: BuildModeType = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 9000;

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });
};
