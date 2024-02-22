import { IArticle, INewArticle } from './interfaces/article.interface';
import axiosInstance from '../axios.config';

class ArticleService {
  private URL = process.env.NEXT_PUBLIC_API_URL;

  async getArticles(): Promise<IArticle[]> {
    const { data } = await axiosInstance.get('/post');

    return data as IArticle[];
  }

  async getArticleById(id: string | number): Promise<IArticle> {
    const { data } = await axiosInstance.get(`/post/${id}`);

    return data as IArticle;
  }

  async createArticle(body: INewArticle): Promise<IArticle> {
    const { data } = await axiosInstance.post('/post', {
      ...body,
    });

    return data as IArticle;
  }
}

const articleService = new ArticleService();

export default articleService;
