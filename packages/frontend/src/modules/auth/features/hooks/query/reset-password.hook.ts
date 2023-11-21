import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { AuthService } from '../../../services/auth.service';
import { useAuthMutation } from './auth-mutation.hook';
import { ROUTER_KEYS } from '../../../../common/consts/app-keys.const';
import { HttpException } from '../../../../common/types/services';

export const useResetPassword = () => {
  const authService: AuthService = new AuthService();
  const history = useHistory();

  const onError = (error: AxiosError, _: string, redirect: string) => {
    const data: HttpException = error.response?.data as HttpException;
    history.push(redirect);
    toast.error(data.message);
  };

  const { mutate } = useAuthMutation({
    mutationFn: authService.resetPassword,
    onSuccessMessage: 'Password successfully rested',
    onSuccessRedirect: ROUTER_KEYS.LOGIN,
    onError
  });

  return { resetPassword: mutate };
};
