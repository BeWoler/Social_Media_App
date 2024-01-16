'use client';
import React from 'react';
import { AtSymbolIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';

import { Avatar } from '@/components/shared';
import ButtonDefault from '@/components/ui/Button/ButtonDefault';
import AuthLoader from '@/components/features/AuthLoader';

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="fixed z-10 flex w-full p-4 bg-dark-3 mb-10 items-center justify-between shadow-secondary-shadow">
      <Link href={'/'} className="flex items-center gap-3">
        <AtSymbolIcon width={50} height={50} color="#877EFF" />
        <div className="text-4xl">Social Media App</div>
      </Link>
      <AuthLoader>
        {session ? (
          <Link href={'/profile'} className="flex gap-3">
            <Avatar
              url={session.user?.image as string}
              name={session.user?.name as string}
              email={session.user?.email as string}
            />
            <ButtonDefault title="Sign Out" click={() => signOut()} />
          </Link>
        ) : (
          <ButtonDefault title="Sign In" click={() => signIn('github')} />
        )}
      </AuthLoader>
    </header>
  );
};

export default Header;
