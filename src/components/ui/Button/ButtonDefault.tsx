'use client';

import { TButton } from './types/button.type';

const ButtonDefault = ({ title, click, subClass }: TButton) => {
  return (
    <button
      onClick={click}
      className={`${subClass} p-2 rounded-lg bg-light-1 text-dark-1 hover:bg-light-3 hover:text-light-1 duration-300`}
    >
      {title}
    </button>
  );
};

export default ButtonDefault;
