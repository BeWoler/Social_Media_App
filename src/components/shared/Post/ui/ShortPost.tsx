import React from 'react';
import Link from 'next/link';
import Markdown from 'react-markdown';

import { TPost } from '../types/post.type';

const ShortPost = (post: TPost) => {
  const postDate = post.createdAt
    ?.replaceAll('-', '.')
    .split('.')
    .toReversed()
    .join('.');

  return (
    <Link href={`/post/${post.id}`}>
      <div className="bg-dark-4 rounded-xl hover:shadow-primary-shadow gap-4 min-w-[375px] max-w-3xl duration-500 hover:scale-105">
        <div className="flex flex-col p-5 justify-start items-start">
          <div className="border-b-2 border-dark-4 w-full flex items-center justify-between">
            <h2 className="p-2 text-xl">{post.title}</h2>
          </div>
          <div>
            <Markdown className="p-2">
              {post.description.substring(0, 256) + '...'}
            </Markdown>
          </div>
        </div>
        <div className="flex w-full justify-end">
          <div className="p-2 text-sm text-primary-600">
            <p>{postDate}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShortPost;
