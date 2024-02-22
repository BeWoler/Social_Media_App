import { useMutation } from '@tanstack/react-query';

import { signInMutationKey } from '@/constants';
import authService from '@/app/api/services/auth.service';

export const useSignIn = () => {
  return useMutation({
    mutationKey: [signInMutationKey],
    mutationFn: (userData: { email: string; password: string }) => {
      return authService.signin({
        email: userData.email,
        password: userData.password,
      });
    },
    onError: (error: {
      response: {
        data: { message: string; status: number };
      };
    }) => {
      return error;
    },
  });
};
