'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Markdown from 'react-markdown';

import { useSingleArticle } from '@/hooks/query/useArticles';

import { Spinner } from '../..';

const FullPost = () => {
  const params = useParams();
  const { isFetching, data } = useSingleArticle(params.id as string);

  if (isFetching) return <Spinner />;

  return (
    <div className="bg-dark-4 p-3 rounded-xl shadow-secondary-shadow gap-4 min-w-[375px] duration-500 cursor-default">
      <div className="border-b-2 border-dark-4 w-full flex items-center justify-between">
        <h1 className="p-2 text-3xl">{data?.title}</h1>
        <Link
          href={`/profile/${data?.author}`}
          className="text-primary-600 text-sm"
        >
          {data?.author || 'BeWoler'}
        </Link>
      </div>
      <Markdown className="text-lg">{data?.description}</Markdown>
      <div className="flex justify-end p-2 text-sm text-primary-600">
        <p>{data?.date || '01.01.2024'}</p>
      </div>
    </div>
  );
};

export default FullPost;
