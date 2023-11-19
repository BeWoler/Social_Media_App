'use client';

import React from 'react';

import { TButton } from './types/button.type';
import ButtonDefault from './ButtonDefault';
import ButtonGradient from './ButtonGradient';

const Button = ({ variant, title, click, subClass }: TButton) => {
  const declareBtnVariant = (title: string): JSX.Element => {
    switch (variant) {
      case 'default':
        return (
          <ButtonDefault title={title} click={click} subClass={subClass} />
        );
      case 'gradient':
        return (
          <ButtonGradient title={title} click={click} subClass={subClass} />
        );
      default:
        return (
          <ButtonDefault title={title} click={click} subClass={subClass} />
        );
    }
  };

  return declareBtnVariant(title);
};

export default Button;
