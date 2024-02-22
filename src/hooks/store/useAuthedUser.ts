import { create } from 'zustand';

import { IAuthedUser, IAuthedUserData } from './store.interface';

export const useAuthedUser = create<IAuthedUser>((set) => ({
  accessToken: '',
  user: {
    id: '',
    name: '',
    username: '',
    email: '',
    image: '',
  },
  setAuthedUser(userData: IAuthedUserData) {
    set(() => ({
      user: { ...userData.user },
      accessToken: userData.accessToken,
    }));
  },
  clearAuthedUser() {
    set(() => ({
      user: { email: '', username: '', image: '', id: '', name: '' },
      accessToken: '',
    }));
  },
}));
