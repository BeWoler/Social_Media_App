'use client';

import React, { FormEvent } from 'react';

import { Button, Input } from '@/components/ui';
import { useAuthedUser, useFormType, useSignUp } from '@/hooks';
import { Spinner, Toast } from '@/components/shared';

import { TSignForm } from './types/signForm.type';

const SignUpForm = ({ subClass }: TSignForm) => {
  const { mutate, status, error } = useSignUp();
  const { setFormType } = useFormType();
  const { id } = useAuthedUser((state) => state.user);

  const emailRef = React.useRef<HTMLInputElement>(null);
  const usernameRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({
      email: emailRef.current?.value as string,
      username: usernameRef.current?.value as string,
      password: passwordRef.current?.value as string,
    });

    if (
      emailRef.current?.value !== undefined &&
      passwordRef.current?.value !== undefined &&
      usernameRef.current?.value !== undefined
    ) {
      emailRef.current.value = '';
      passwordRef.current.value = '';
      usernameRef.current.value = '';
    }
  };

  React.useEffect(() => {
    if (status === 'success') {
      setTimeout(() => setFormType('signIn'), 1000);
    }
  }, [status]);

  const defaultFormInputStyle = 'flex flex-col';

  return (
    <>
      <h2 className="text-3xl mb-2">Sign Up</h2>
      <form
        onSubmit={status === 'pending' ? undefined : handleSubmit}
        className={`${subClass} flex flex-col bg-dark-4 p-4 mb-4 gap-7 rounded-xl transition-all duration-500 hover:shadow-primary-shadow`}
      >
        {status === 'success' && <Toast message="Success!" />}
        <div className={defaultFormInputStyle}>
          <Input
            ref={emailRef}
            label="Email"
            name="email"
            required
            labelSubClass="mb-1 text-lg"
            inputSubClass="text-black"
            placeholder="Email"
            type="text"
          />
        </div>
        <div className={defaultFormInputStyle}>
          <Input
            ref={usernameRef}
            label="Username"
            name="username"
            required
            labelSubClass="mb-1 text-lg"
            inputSubClass="text-black"
            placeholder="Username"
            type="text"
          />
        </div>
        <div className={defaultFormInputStyle}>
          <Input
            ref={passwordRef}
            label="Password"
            name="password"
            required
            labelSubClass="mb-1 text-lg"
            inputSubClass="text-black"
            placeholder="Password"
            type="password"
          />
        </div>
        {error && (
          <div className="text-lg text-red">{error.response.data.message}</div>
        )}
        <Button
          title={status === 'pending' ? <Spinner /> : 'Sign Up'}
          disabled={status === 'pending' || !!id}
          click={() => handleSubmit}
          subClass="text-lg"
        />
      </form>
    </>
  );
};

export default SignUpForm;
