import { useMutation } from '@tanstack/react-query';

import { userVerifyMutationKey } from '@/constants';
import authService from '@/app/api/services/auth.service';

export const useVerify = () => {
  return useMutation({
    mutationKey: [userVerifyMutationKey],
    mutationFn: async () => {
      return await authService.verify();
    },
  });
};
