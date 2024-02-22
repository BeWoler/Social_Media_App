import { useMutation } from '@tanstack/react-query';

import { createPost } from '@/constants';
import { articleService } from '@/app/api/services';

export const useNewArticle = () => {
  return useMutation({
    mutationKey: [createPost],
    mutationFn: (article: {
      user: string;
      description: string;
      title: string;
    }) =>
      articleService.createArticle({
        user: article.user,
        description: article.description,
        title: article.title,
      }),
    onError: (error: {
      response: {
        data: { message: string; status: number };
      };
    }) => {
      return error;
    },
  });
};
