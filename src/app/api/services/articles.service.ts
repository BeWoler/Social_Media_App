class ArticlesModule {
  private URL = 'https://fakestoreapi.com';

  async getArticles(limit?: number | string) {
    return await fetch(`${this.URL}/products?limit=${limit ? limit : '0'}`, {
      method: 'GET',
    }).then((res) => res.json());
  }

  async getArticleById(id: string | number) {
    return await fetch(`${this.URL}/products/${id}`, { method: 'GET' }).then(
      (res) => res.json(),
    );
  }
}

const ArticlesService = new ArticlesModule();

export default ArticlesService;
