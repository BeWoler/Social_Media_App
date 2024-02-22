'use client';
import { Github } from 'lucide-react';

import { TButton } from './types/button.type';

const ButtonAuth = ({
  title,
  click,
  subClass,
  authIcon,
  disabled,
}: TButton) => {
  return (
    <div
      onClick={click}
      className={`${subClass} flex gap-2 p-2 rounded-lg bg-light-1 text-dark-1 hover:bg-light-3 hover:text-light-1 duration-300 cursor-pointer ${
        disabled && 'bg-dark-3'
      }`}
    >
      <button disabled={disabled}>{title}</button>
      {authIcon === 'github' ? <Github size={24} /> : null}
    </div>
  );
};

export default ButtonAuth;
