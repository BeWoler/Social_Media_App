import { IAuthedUserData } from '@/hooks/store/store.interface';

import { ISignInUser, ISignUpUser, IUser } from './interfaces/user.interface';
import axiosInstance from '../axios.config';

class AuthService {
  async signin(userCred: ISignInUser): Promise<IAuthedUserData> {
    const { data } = await axiosInstance.post('/auth/signin', { ...userCred });

    return data as IAuthedUserData;
  }

  async signup(userCred: ISignUpUser): Promise<IUser> {
    const { data } = await axiosInstance.post('/auth/signup', {
      ...userCred,
    });

    return data as IUser;
  }

  async logout(): Promise<void> {
    await axiosInstance.delete('/auth/logout');
  }

  async verify(): Promise<IAuthedUserData | boolean> {
    const { data } = await axiosInstance.post('/auth/verify');

    return data;
  }
}

const authService = new AuthService();

export default authService;
