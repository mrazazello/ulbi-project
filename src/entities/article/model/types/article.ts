enum ArticleBlockType {
  CODE = "CODE",
  TEXT = "TEXT",
  IMAGE = "IMAGE",
}

interface IArtilceBaseBlock {
  id: string;
  type: ArticleBlockType;
}

interface IArticleTextBlock extends IArtilceBaseBlock {
  type: ArticleBlockType.TEXT;
  title: string;
  paragraphs: string[];
}

interface IArticleCodeBlock extends IArtilceBaseBlock {
  type: ArticleBlockType.CODE;
  code: string;
}

interface IArticleImageBlock extends IArtilceBaseBlock {
  type: ArticleBlockType.IMAGE;
  title?: string;
  src: string;
}

type ArticleBlock = IArticleTextBlock | IArticleCodeBlock | IArticleImageBlock;

enum ArticlesTypesEnum {
  IT = "IT",
  SIENCE = "Sience",
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
}

export interface IArticleSchema {
  data?: IArticle;
  isLoading: boolean;
  error?: string;
}
