import React, { FC } from 'react';
import { useGetUser } from '../../features/hooks/query/get-user.hook';
import { Children } from '../../../common/types/props';

export const UserProvider: FC<Children> = ({ children }) => {
  const { isLoading } = useGetUser();
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return !isLoading ? <>{children}</> : <></>;
};
