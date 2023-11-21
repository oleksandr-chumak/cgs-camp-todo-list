import { useMutation } from 'react-query';
import toast from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { AxiosError } from 'axios';
import { AuthMutation } from '../../types/query.type';
import { HttpException } from '../../../../common/types/services';

export const useAuthMutation = <T, G>({
  mutationFn,
  onSuccessRedirect,
  onSuccess,
  onError,
  onSuccessMessage
}: AuthMutation<T, G>) => {
  const history = useHistory();

  const handleSuccess = () => {
    history.push(onSuccessRedirect);
    toast.success(onSuccessMessage);
  };

  const handleError = (error: AxiosError) => {
    const data: HttpException = error.response?.data as HttpException;
    toast.error(data.message);
  };

  const mutation = useMutation({
    mutationFn,
    onSuccess: onSuccess
      ? (data) => onSuccess(data, onSuccessMessage, onSuccessRedirect)
      : handleSuccess,
    onError: onError
      ? (error: AxiosError) => onError(error, onSuccessMessage, onSuccessRedirect)
      : handleError
  });

  return mutation;
};
