import React from 'react';

import { TSignForm } from './types/signForm.type';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const SignForm = ({ variant, subClass }: TSignForm) => {
  const declareFormVariant = (): JSX.Element => {
    switch (variant) {
      case 'signIn':
        return <SignInForm subClass={subClass} />;
      case 'signUp':
        return <SignUpForm subClass={subClass} />;
      default:
        return <SignInForm subClass={subClass} />;
    }
  };

  return declareFormVariant();
};

export default SignForm;
