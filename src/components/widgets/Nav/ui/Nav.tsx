import React from 'react';
import Link from 'next/link';

const Nav = ({ links }: { links: Array<{ title: string; path: string }> }) => {
  const navLinks = (): React.ReactNode => {
    return links.map((link) => {
      if (link.path === '/profile') null;
      else
        return (
          <Link
            key={link.path}
            href={link.path}
            className="hover:text-primary-500 duration-300"
          >
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
