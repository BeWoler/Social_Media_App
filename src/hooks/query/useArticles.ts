import { useQuery } from '@tanstack/react-query';

import { articleService } from '@/app/api/services';
import { postSingleQueryKey, postsQueryKey } from '@/constants';

export const useArticles = () => {
  return useQuery({
    queryKey: [postsQueryKey],
    queryFn: () => articleService.getArticles(),
  });
};

export const useSingleArticle = (id: string) => {
  return useQuery({
    queryKey: [postSingleQueryKey],
    queryFn: () => articleService.getArticleById(id),
  });
};
