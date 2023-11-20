import React from 'react';
import Image from 'next/image';

import { TAvatar } from '../types/avatar.type';

const Avatar = ({
  url = 'https://github.com/shadcn.png',
  name,
  email,
}: TAvatar) => {
  if (!url) {
    return (
      <div className="flex items-center gap-4">
        <p>{name}</p>
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
          <span className="font-medium text-gray-600">
            {name?.split('')[0]}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 overflow-hidden">
      <p>{email}</p>
      <Image
        width={40}
        height={40}
        src={url}
        alt="avatar"
        className="rounded-full"
      />
    </div>
  );
};

export default Avatar;
