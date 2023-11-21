import { QueryClient, useMutation, useQueryClient } from 'react-query';
import { useHistory } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';
import { QUERY_KEYS, ROUTER_KEYS } from '../../../../common/consts/app-keys.const';
import { AuthService } from '../../../services/auth.service';
import { HttpException } from '../../../../common/types/services';

export const useLogout = () => {
  const authService: AuthService = new AuthService();
  const queryClient: QueryClient = useQueryClient();
  const history = useHistory();
  const onSuccess = async () => {
    await queryClient.invalidateQueries(QUERY_KEYS.USER);
    history.push(ROUTER_KEYS.LOGIN);
    toast.success('See you');
  };

  const onError = (error: AxiosError) => {
    const data: HttpException = error.response?.data as HttpException;
    toast.error(data.message);
  };

  const mutation = useMutation({ mutationFn: authService.logout, onSuccess, onError });

  return { logout: mutation.mutate };
};
