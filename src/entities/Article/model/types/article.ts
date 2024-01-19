import { IUser } from "entities/user";

export enum ArticleBlockTypeEnum {
  CODE = "CODE",
  TEXT = "TEXT",
  IMAGE = "IMAGE",
}

interface IArtilceBaseBlock {
  id: string;
  type: ArticleBlockTypeEnum;
}

export interface IArticleTextBlock extends IArtilceBaseBlock {
  type: ArticleBlockTypeEnum.TEXT;
  title: string;
  paragraphs: string[];
}

export interface IArticleCodeBlock extends IArtilceBaseBlock {
  type: ArticleBlockTypeEnum.CODE;
  code: string;
}

export interface IArticleImageBlock extends IArtilceBaseBlock {
  type: ArticleBlockTypeEnum.IMAGE;
  title?: string;
  src: string;
}

export type ArticleBlock =
  | IArticleTextBlock
  | IArticleCodeBlock
  | IArticleImageBlock;

export enum ArticlesTypesEnum {
  ALL = "All",
  IT = "IT",
  SIENCE = "Sience",
}

export enum ArticleSortFieldEnum {
  VIEWS = "views",
  TITLE = "title",
  CREATED = "created",
}

export interface IArticle {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticlesTypesEnum[];
  blocks: ArticleBlock[];
  user: IUser;
}

export interface IArticleSchema {
  data?: IArticle;
  isLoading: boolean;
  error?: string;
}

export enum ArticleViewEnum {
  LIST = "list",
  THUMB = "thumb",
}
