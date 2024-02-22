'use client';

import React from 'react';

import { SignForm } from '@/components/features';
import { useFormType } from '@/hooks';

const SignPage = () => {
  const { formType, setFormType } = useFormType();

  const defaultSignLinkStyle = 'text-primary-500 cursor-pointer';

  return (
    <div>
      <SignForm variant={formType} />
      <div className="text-2xl">
        {formType === 'signUp' ? (
          <p>
            If you are already registered, please go to the{' '}
            <span
              onClick={() => setFormType('signIn')}
              className={defaultSignLinkStyle}
            >
              SIGN IN
            </span>{' '}
            form
          </p>
        ) : (
          <p>
            If you have not registered yet, please go to the{' '}
            <span
              onClick={() => setFormType('signUp')}
              className={defaultSignLinkStyle}
            >
              SIGN UP
            </span>{' '}
            form
          </p>
        )}
      </div>
    </div>
  );
};

export default SignPage;
