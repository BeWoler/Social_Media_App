'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { ShortPost, Spinner } from '@/components/shared';
import { TPost } from '@/components/shared/Post/types/post.type';
import { ArticlesService } from '@/app/api/services';

const MainPage = () => {
  const { isFetching, data } = useQuery({
    queryKey: ['articles'],
    queryFn: () => ArticlesService.getArticles(2),
  });

  return (
    <React.Fragment>
      {isFetching ? (
        <Spinner />
      ) : (
        <div className="flex flex-col gap-14">
          {data?.map((post: TPost) => <ShortPost key={post.id} {...post} />)}
        </div>
      )}
    </React.Fragment>
  );
};

export default MainPage;
