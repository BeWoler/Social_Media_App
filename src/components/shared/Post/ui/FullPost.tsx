'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Link from 'next/link';

import { ArticlesService } from '@/app/api/services';

import { Spinner } from '../..';

const FullPost = () => {
  const params = useParams();
  const { isFetching, data } = useQuery({
    queryKey: ['single articles'],
    queryFn: () => ArticlesService.getArticleById(params.id as string),
  });

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
      <div className="p-3 flex justify-center">
        <Image
          src={data?.image as string | StaticImport}
          width={300}
          height={200}
          alt="pic"
        />
      </div>
      <div className="text-lg">{data?.description}</div>
      <div className="flex justify-end p-2 text-sm text-primary-600">
        <p>{data?.date}</p>
      </div>
    </div>
  );
};

export default FullPost;
