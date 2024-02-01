import { useQuery } from '@tanstack/react-query';

import { ArticlesService } from '@/app/api/services';
import { postSingleQueryKey, postsQueryKey } from '@/constants';

export const useArticles = () => {
  return useQuery({
    queryKey: [postsQueryKey],
    queryFn: () => ArticlesService.getArticles(),
  });
};

export const useSingleArticle = (id: string) => {
  return useQuery({
    queryKey: [postSingleQueryKey],
    queryFn: () => ArticlesService.getArticleById(id),
  });
};
