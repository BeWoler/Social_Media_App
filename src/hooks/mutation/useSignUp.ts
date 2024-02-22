import { useMutation } from '@tanstack/react-query';

import { signUpMutationKey } from '@/constants';
import authService from '@/app/api/services/auth.service';

export const useSignUp = () => {
  return useMutation({
    mutationKey: [signUpMutationKey],
    mutationFn: (userData: {
      email: string;
      username: string;
      password: string;
    }) => {
      return authService.signup({
        email: userData.email,
        username: userData.username,
        password: userData.password,
      });
    },
    onError: (error: {
      response: {
        data: { message: string; status: number };
      };
    }) => {
      return error.response.data;
    },
  });
};
