'use client';

import React from 'react';
import { useSession } from 'next-auth/react';

import { useAuth } from '@/hooks';

const AuthChecker = ({ children }: { children: React.ReactNode }) => {
  const setAuth = useAuth((store) => store.setAuth);
  const isAuth = useAuth((store) => store.isAuth);
  const { status } = useSession();

  React.useEffect(() => {
    if (status === 'unauthenticated') {
      setAuth(false);
    } else if (status === 'authenticated') {
      setAuth(true);
    }
  }, [status, setAuth]);

  return isAuth ? children : <div>You should be authorized</div>;
};

export default AuthChecker;
