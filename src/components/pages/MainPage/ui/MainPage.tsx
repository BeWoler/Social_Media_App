'use client';

import React from 'react';
import { useQueryClient } from '@tanstack/react-query';

import { ShortPost, Spinner } from '@/components/shared';
import { TPost } from '@/components/shared/Post/types/post.type';
import { useArticles } from '@/hooks';
import { Button } from '@/components/ui';
import { postsQueryKey } from '@/constants';

const MainPage = () => {
  const { isFetching, data } = useArticles();
  const queryClient = useQueryClient();

  console.log(data);

  return (
    <React.Fragment>
      {isFetching ? (
        <Spinner />
      ) : (
        <div className="flex gap-14 flex-wrap items-center justify-center">
          <Button
            variant="gradient"
            title="Refresh posts"
            click={() =>
              queryClient.invalidateQueries({ queryKey: [postsQueryKey] })
            }
          />
          {data?.length ? (
            data.map((post: TPost) => <ShortPost key={post.id} {...post} />)
          ) : (
            <h1 className="text-3xl">Zero posts :3</h1>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default MainPage;
