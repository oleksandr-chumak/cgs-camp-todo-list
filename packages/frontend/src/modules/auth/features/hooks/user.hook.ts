import { QueryClient, useQueryClient } from 'react-query';
import { QUERY_KEYS } from '../../../common/consts/app-keys.const';
import { UserModel } from '../../models/user.model';

export const useUser = (): UserModel | undefined => {
  const queryClient: QueryClient = useQueryClient();
  const user = queryClient.getQueryState<UserModel>(QUERY_KEYS.USER);
  return user?.data;
};
