'use client';

import React from 'react';

import { ShortPost, Spinner } from '@/components/shared';
import { TPost } from '@/components/shared/Post/types/post.type';
import { useArticles } from '@/hooks';

const MainPage = () => {
  const { isFetching, data: posts } = useArticles();

  return (
    <React.Fragment>
      {isFetching ? (
        <Spinner />
      ) : (
        <div className="flex gap-14 flex-wrap items-center justify-center">
          {posts?.length ? (
            posts.map((post: TPost) => <ShortPost key={post.id} {...post} />)
          ) : (
            <h1 className="text-3xl">Zero posts :3</h1>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default MainPage;
