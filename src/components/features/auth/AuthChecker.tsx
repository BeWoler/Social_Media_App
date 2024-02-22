'use client';

import React from 'react';

import { useAuthedUser, useVerify } from '@/hooks';
import { Spinner } from '@/components/shared';

const AuthChecker = ({
  children,
  customElement,
}: {
  children: React.ReactNode;
  customElement: string | React.ReactNode;
}) => {
  const { setAuthedUser, user } = useAuthedUser();
  const { mutate, status, data: userData } = useVerify();

  React.useEffect(() => {
    mutate();
  }, []);

  React.useEffect(() => {
    if (status === 'success' && typeof userData !== 'boolean') {
      setAuthedUser({
        user: userData.user,
        accessToken: userData.accessToken,
      });
    }
  }, [status]);

  if (status === 'pending' || status === 'idle') return <Spinner />;
  else if (user.id) return children;
  else return customElement;
};

export default AuthChecker;
