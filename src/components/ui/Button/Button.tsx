'use client';

import React from 'react';

import { TButton } from './types/button.type';
import ButtonDefault from './ButtonDefault';
import ButtonGradient from './ButtonGradient';
import ButtonAuth from './ButtonAuth';

const Button = ({
  variant,
  title,
  click,
  subClass,
  authIcon,
  disabled,
}: TButton) => {
  const declareBtnVariant = (title: string | React.ReactNode): JSX.Element => {
    switch (variant) {
      case 'default':
        return (
          <ButtonDefault
            title={title}
            click={click}
            subClass={subClass}
            disabled={disabled}
          />
        );
      case 'gradient':
        return (
          <ButtonGradient
            title={title}
            click={click}
            subClass={subClass}
            disabled={disabled}
          />
        );
      case 'auth':
        return (
          <ButtonAuth
            title={title}
            click={click}
            subClass={subClass}
            authIcon={authIcon}
            disabled={disabled}
          />
        );
      default:
        return (
          <ButtonDefault
            title={title}
            click={click}
            subClass={subClass}
            disabled={disabled}
          />
        );
    }
  };

  return declareBtnVariant(title);
};

export default Button;
