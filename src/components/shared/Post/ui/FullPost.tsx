'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Markdown from 'react-markdown';

import { useSingleArticle } from '@/hooks/query/useArticles';

import { Spinner } from '../..';

const FullPost = () => {
  const params = useParams();
  const { isFetching, data: post } = useSingleArticle(params.id as string);

  if (isFetching) return <Spinner />;

  const postDate = post?.createdAt
    ?.replaceAll('-', '.')
    .split('.')
    .toReversed()
    .join('.');

  return (
    <div className="bg-dark-4 p-3 rounded-xl shadow-secondary-shadow gap-4 min-w-[375px] duration-500 cursor-default">
      <div className="border-b-2 border-dark-4 w-full flex items-center justify-between">
        <h1 className="p-2 text-3xl">{post?.title}</h1>
        <Link
          href={`/profile/${post?.user.id}`}
          className="text-primary-600 text-sm"
        >
          {post?.user.email}
        </Link>
      </div>
      <Markdown className="text-lg">{post?.description}</Markdown>
      <div className="flex justify-end p-2 text-sm text-primary-600">
        <p>{postDate}</p>
      </div>
    </div>
  );
};

export default FullPost;
