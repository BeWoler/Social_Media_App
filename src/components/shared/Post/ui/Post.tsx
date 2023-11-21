import React from 'react';
import Link from 'next/link';

import { TPost } from '../types/post.type';

const Post = (post: TPost) => {
  return (
    <div className="bg-dark-3 rounded-xl shadow-primary-shadow gap-4 min-w-[375px] max-w-xl duration-500 hover:scale-105 cursor-default">
      <div className="flex flex-col p-5 justify-start items-start">
        <div className="border-b-2 border-dark-4 w-full flex items-center justify-between">
          <h2 className="p-2 text-xl">{post.title}</h2>
          <Link
            href={`/profile/${post.author}`}
            className="text-primary-600 text-sm"
          >
            {post.author}
          </Link>
        </div>
        <div>
          <p className="p-2">{post.content}</p>
        </div>
      </div>
      <div className="flex justify-end p-2 text-sm text-primary-600">
        <p>{post.date}</p>
      </div>
    </div>
  );
};

export default Post;
