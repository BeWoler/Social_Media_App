import React from 'react';
import Image from 'next/image';

import { TAvatar } from '../types/avatar.type';

const Avatar = ({ url, email }: TAvatar) => {
  if (!url) {
    return (
      <div className="flex items-center gap-4">
        <p>{email}</p>
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
