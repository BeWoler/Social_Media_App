import React from 'react';
import { AtSymbolIcon } from '@heroicons/react/24/outline';

const Header = () => {
  return (
    <header className="flex w-full items-center gap-3 p-3">
      <AtSymbolIcon width={50} height={50} color="#877EFF" />
      <div className="text-4xl">Social Media App</div>
    </header>
  );
};

export default Header;
