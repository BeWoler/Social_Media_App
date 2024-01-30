class ArticlesModule {
  private URL = 'https://fakestoreapi.com';
  async getArticles(limit?: number | string) {
    return await fetch(`${this.URL}/products?limit=${limit ? limit : '0'}`, {
      method: 'GET',
    }).then((res) => res.json());
  }
}

const ArticlesService = new ArticlesModule();

export default ArticlesService;
