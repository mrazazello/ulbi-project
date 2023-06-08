export type BuildModeType = "development" | "production";

export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  scssGlobal: string;
}

export interface IBuildEnv {
  mode: BuildModeType;
  port: number;
}

export interface IBuildOptions {
  mode: BuildModeType;
  paths: IBuildPaths;
  isDev: boolean;
  port: number;
}
