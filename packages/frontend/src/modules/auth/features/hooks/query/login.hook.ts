import { QueryClient, useQueryClient } from 'react-query';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { AuthService } from '../../../services/auth.service';
import { useAuthMutation } from './auth-mutation.hook';
import { QUERY_KEYS, ROUTER_KEYS } from '../../../../common/consts/app-keys.const';

export const useLogin = () => {
  const queryClient: QueryClient = useQueryClient();
  const history = useHistory();
  const authService: AuthService = new AuthService();

  const onSuccess = async (_: void, message: string, redirect: string) => {
    await queryClient.invalidateQueries([QUERY_KEYS.USER]);
    toast.success(message);
    history.push(redirect);
  };

  const { mutate } = useAuthMutation({
    mutationFn: authService.login,
    onSuccessMessage: 'Welcome back',
    onSuccessRedirect: ROUTER_KEYS.ROOT,
    onSuccess
  });

  return { login: mutate };
};
