import { useMutation } from '@tanstack/react-query';

import authService from '@/app/api/services/auth.service';
import { logoutMutationKey } from '@/constants';

export const useLogout = () => {
  return useMutation({
    mutationKey: [logoutMutationKey],
    mutationFn: () => authService.logout(),
  });
};
