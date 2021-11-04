export type ClientAuthor = {
  id: number;
  name: string;
};

export type ClientArticle = {
  id: number;
  title: string;
  rating: number;
  author: ClientAuthor;
};

export type ServerAuthor = {
  id: number;
  name: string;
  articles?: ServerArticle[];
};

export type ServerArticle = {
  id: number;
  title: string;
  rating: number;
  created_at: Date;
  author_id: number;
  author?: ServerAuthor;
};

export type GqlServerAuthors = {
  _helloworld_author: ServerAuthor[];
};

export type GqlServerArticles = {
  _helloworld_article: ServerArticle[];
};
