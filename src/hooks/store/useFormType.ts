import { create } from 'zustand';

import { IFormType } from './store.interface';

export const useFormType = create<IFormType>((set) => ({
  formType: 'signUp',
  setFormType(type: 'signIn' | 'signUp') {
    set(() => ({ formType: type }));
  },
}));
