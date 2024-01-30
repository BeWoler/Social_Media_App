import { create } from 'zustand';

interface IAuth {
  isAuth: boolean;
  setAuth: (status: boolean) => void;
}

export const useAuth = create<IAuth>((set) => ({
  isAuth: false,
  setAuth: (status: boolean) => set(() => ({ isAuth: status })),
}));
