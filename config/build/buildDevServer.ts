import { Configuration as DevConfiguration } from "webpack-dev-server";
import { IBuildOptions } from "./types/build";

function buildDevServer(options: IBuildOptions): DevConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  };
}

export default buildDevServer;
