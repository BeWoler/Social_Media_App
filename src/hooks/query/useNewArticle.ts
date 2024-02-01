import { useMutation } from '@tanstack/react-query';

import { createPost } from '@/constants';
import { ArticlesService } from '@/app/api/services';

export const useNewArticle = ({
  author,
  description,
  title,
}: {
  author: string;
  description: string;
  title: string;
}) => {
  return useMutation({
    mutationKey: [createPost],
    mutationFn: () =>
      ArticlesService.createArticle({
        author,
        description,
        title,
      }),
    async onSuccess() {
      alert('Created');
    },
  });
};
