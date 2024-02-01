import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui';

import { TPost } from '../types/post.type';

const ShortPost = (post: TPost) => {
  return (
    <div className="bg-dark-4 rounded-xl hover:shadow-primary-shadow  gap-4 min-w-[375px] max-w-3xl duration-500 hover:scale-105 cursor-default">
      <div className="flex flex-col p-5 justify-start items-start">
        <div className="border-b-2 border-dark-4 w-full flex items-center justify-between">
          <h2 className="p-2 text-xl">{post.title}</h2>
        </div>
        <div>
          <p className="p-2">{post.description.substring(0, 48) + '...'}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="p-2 text-sm text-primary-600">
          <p>{post.date || '01.01.2024'}</p>
        </div>
        <div className="p-2">
          <Link href={`/post/${post.id}`}>
            <Button variant="default" title="More..." />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShortPost;
