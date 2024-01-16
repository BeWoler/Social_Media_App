'use client';
import { useSession } from 'next-auth/react';
import React from 'react';

import { Spinner } from '@/components/shared';

const AuthLoader = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();

  if (status === 'loading') return <Spinner />;
  else return children;
};

export default AuthLoader;
