'use client';

import { TButton } from './types/button.type';

const ButtonGradient = ({ title, click, subClass, disabled }: TButton) => {
  return (
    <button
      disabled={disabled}
      className={`${subClass} bg-primary-gradient p-2 rounded-lg`}
      onClick={click}
    >
      {title}
    </button>
  );
};

export default ButtonGradient;
