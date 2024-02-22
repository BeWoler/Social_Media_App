import React, { forwardRef } from 'react';

import { TInput } from './types/input.type';

const Input = forwardRef<HTMLInputElement, TInput>(
  (
    {
      name,
      placeholder,
      type,
      inputSubClass,
      required,
      label,
      labelSubClass,
      onChange,
    }: TInput,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <React.Fragment>
        <label className={labelSubClass}>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          ref={ref}
          required={required}
          className={`${inputSubClass} p-2 rounded-lg`}
          onChange={onChange}
        />
      </React.Fragment>
    );
  },
);

Input.displayName = 'Input';

export default Input;
