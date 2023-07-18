// Нужен для парсинга абсолютны импортов в StoryBook

import path from "path";
import { DefinePlugin, RuleSetRule } from "webpack";
import { WebpackConfiguration } from "webpack-dev-server";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";
import { IBuildPaths } from "../build/types/build";

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

  // нужно (падает storybook) так как entities конфликтует с такой же папкой в node_modules
  config.resolve.alias = {
    entities: path.resolve(__dirname, "..", "..", "src", "entities"),
  };

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }

    return rule;
  });

  config.module.rules.push(buildSvgLoader(), buildCssLoader(true, paths));

  config.plugins.push(
    new DefinePlugin({
      IS_DEV: true,
    })
  );

  return config;
};
