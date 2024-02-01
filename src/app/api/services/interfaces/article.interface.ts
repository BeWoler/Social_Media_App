export interface IArticle {
  id: string | number;
  author: string;
  title: string;
  description: string;
  date?: string;
}

export interface INewArticle extends Omit<IArticle, 'id'> {}
