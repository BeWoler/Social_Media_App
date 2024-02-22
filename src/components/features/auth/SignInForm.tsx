'use client';

import React, { FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { Button, Input } from '@/components/ui';
import { useAuthedUser } from '@/hooks';
import { useSignIn } from '@/hooks';
import { Spinner } from '@/components/shared';

import { TSignForm } from './types/signForm.type';

const SignInForm = ({ subClass }: TSignForm) => {
  const { setAuthedUser, user } = useAuthedUser();
  const { back } = useRouter();
  const { mutate, status, data: userData, error } = useSignIn();

  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      email: emailRef.current?.value as string,
      password: passwordRef.current?.value as string,
    });

    if (
      emailRef.current?.value !== undefined &&
      passwordRef.current?.value !== undefined
    ) {
      emailRef.current.value = '';
      passwordRef.current.value = '';
    }
  };

  useEffect(() => {
    if (status === 'success') {
      setAuthedUser({
        user: userData.user,
        accessToken: userData.accessToken,
      });
      back();
    }
  }, [status]);

  const defaultFormInputStyle = 'flex flex-col';

  return (
    <>
      <h2 className="text-3xl mb-2">Sign In</h2>
      <form
        onSubmit={status === 'pending' ? undefined : handleSubmit}
        className={`${subClass} flex flex-col bg-dark-4 p-4 mb-4 gap-7 rounded-xl transition-all duration-500 hover:shadow-primary-shadow`}
      >
        <div className={defaultFormInputStyle}>
          <Input
            label="Email"
            name="email"
            placeholder="Email"
            required
            ref={emailRef}
            labelSubClass="mb-1 text-lg"
            inputSubClass="text-black"
            type="text"
          />
        </div>
        <div className={defaultFormInputStyle}>
          <Input
            label="Password"
            name="password"
            placeholder="Password"
            required
            ref={passwordRef}
            labelSubClass="mb-1 text-lg"
            inputSubClass="text-black"
            type="password"
          />
        </div>
        {error && (
          <div className="text-lg text-red">{error.response.data.message}</div>
        )}
        <Button
          subClass="text-lg"
          title={status === 'pending' ? <Spinner /> : 'Sign In'}
          disabled={status === 'pending' || !!user.id}
          click={() => handleSubmit}
        />
      </form>
    </>
  );
};

export default SignInForm;
