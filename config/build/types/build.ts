export type BuildModeType = "development" | "production";

export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  scssGlobal: string;
  locales: string;
  buildLocales: string;
}

export interface IBuildEnv {
  mode: BuildModeType;
  port: number;
  apiURL: string;
}

export interface IBuildOptions {
  mode: BuildModeType;
  paths: IBuildPaths;
  isDev: boolean;
  port: number;
  apiURL: string;
  project: "frontend" | "storybook" | "jest";
}
