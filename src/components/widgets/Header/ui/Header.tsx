'use client';
import React from 'react';
import { AtSymbolIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import { useAuthedUser, useLogout } from '@/hooks';
import { Avatar } from '@/components/shared';
import { Button } from '@/components/ui';
import { AuthChecker } from '@/components/features';

const Header = () => {
  const { user, clearAuthedUser } = useAuthedUser();
  const { mutate } = useLogout();

  return (
    <header className="fixed z-10 flex w-full p-4 bg-dark-3 mb-10 items-center justify-between shadow-secondary-shadow">
      <Link href={'/'} className="flex items-center gap-3">
        <AtSymbolIcon width={50} height={50} color="#877EFF" />
        <div className="text-4xl">Social Media App</div>
      </Link>
      <AuthChecker
        customElement={
          <Link href={'/auth'}>
            <Button variant="auth" title="Sign In" />
          </Link>
        }
      >
        {user.id ? (
          <div className="flex gap-3">
            <Avatar url={user.image} name={user.name} email={user.email} />
            <Button
              variant="default"
              title="Sign Out"
              click={() => {
                mutate();
                clearAuthedUser();
              }}
            />
          </div>
        ) : (
          <Link href={'/auth'}>
            <Button variant="auth" title="Sign In" />
          </Link>
        )}
      </AuthChecker>
    </header>
  );
};

export default Header;
