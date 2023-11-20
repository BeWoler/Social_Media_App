import React from 'react';
import { AtSymbolIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { Avatar } from '@/components/shared';

const Header = () => {
  return (
    <header className="flex w-full p-4 bg-dark-3 mb-10 items-center justify-between shadow-secondary-shadow">
      <Link href={'/'} className="flex items-center gap-3">
        <AtSymbolIcon width={50} height={50} color="#877EFF" />
        <div className="text-4xl">Social Media App</div>
      </Link>
      <Link href={'/profile'}>
        <Avatar name="Misha" email="bewoler@gmail.com" />
      </Link>
    </header>
  );
};

export default Header;
