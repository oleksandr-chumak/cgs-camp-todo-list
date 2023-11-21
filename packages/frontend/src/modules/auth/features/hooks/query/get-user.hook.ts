import { QueryClient, useQuery, useQueryClient } from 'react-query';
import { UserService } from '../../../services/user.service';
import { QUERY_KEYS } from '../../../../common/consts/app-keys.const';

export const useGetUser = () => {
  const userService: UserService = new UserService();
  const queryClient: QueryClient = useQueryClient();

  const onError = () => {
    queryClient.setQueryData(QUERY_KEYS.USER, undefined);
  };

  const query = useQuery({
    queryKey: [QUERY_KEYS.USER],
    queryFn: userService.getUser,
    retry: false,
    onError
  });

  return query;
};
