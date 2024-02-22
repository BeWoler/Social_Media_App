export interface IArticle {
  id: string | number;
  user: {
    id: string;
    name: string;
    password: null;
    email: string;
    image: string;
  };
  title: string;
  description: string;
  createdAt?: string;
}

export interface INewArticle {
  user: string;
  title: string;
  description: string;
}
