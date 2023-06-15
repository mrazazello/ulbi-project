// Нужен для парсинга абсолютны импортов в StoryBook

import path from "path";
import { IBuildPaths } from "../build/types/build";
import { RuleSetRule } from "webpack";
import { WebpackConfiguration } from "webpack-dev-server";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";

export default ({ config }: { config: WebpackConfiguration }) => {
  const paths: IBuildPaths = {
    build: "",
    html: "",
    entry: "",
    scssGlobal: path.resolve(__dirname, "..", "..", "src", "app", "styles"),
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push(".ts", ".tsx");

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push(buildSvgLoader(), buildCssLoader(true, paths));

  return config;
};
