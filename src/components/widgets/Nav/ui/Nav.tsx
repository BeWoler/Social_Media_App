'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav = ({
  links,
  icons,
}: {
  links: Array<{ title: string; path: string }>;
  icons: Array<React.ReactNode>;
}) => {
  const pathname = usePathname();
  const navLinks = (): React.ReactNode => {
    return links.map((link, i) => {
      if (link.path === '/profile') null;
      else
        return (
          <Link
            key={link.path}
            href={link.path}
            className={`duration-300 flex gap-3 p-2 rounded-xl items-center ${
              pathname.split('/')[1] === link.path.split('/')[1]
                ? 'bg-primary-500 hover:text-light-1'
                : 'hover:text-primary-500 '
            }`}
          >
            {icons[i - 1]}
            {link.title}
          </Link>
        );
    });
  };

  return (
    <nav className="flex w-full h-full justify-center">
      <ul className="flex flex-col gap-12 py-7">{navLinks()}</ul>
    </nav>
  );
};

export default Nav;
