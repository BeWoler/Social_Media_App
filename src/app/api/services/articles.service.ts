import axios from 'axios';

import { IArticle, INewArticle } from './interfaces/article.interface';

class ArticlesModule {
  private URL = process.env.NEXT_PUBLIC_API_URL;

  async getArticles(): Promise<IArticle[]> {
    return await axios.get(`${this.URL}/post`);
  }

  async getArticleById(id: string | number): Promise<IArticle> {
    return await axios.get(`${this.URL}/post/${id}`);
  }

  async createArticle(body: INewArticle): Promise<IArticle> {
    return await axios.post(`${this.URL}/post`, {
      ...body,
    });
  }
}

const ArticlesService = new ArticlesModule();

export default ArticlesService;
