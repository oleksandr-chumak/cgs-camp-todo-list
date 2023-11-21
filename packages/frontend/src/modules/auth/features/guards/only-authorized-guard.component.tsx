import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { UserModel } from '../../models/user.model';
import { useUser } from '../hooks/user.hook';
import { ROUTER_KEYS } from '../../../common/consts/app-keys.const';

export const onlyAuthorizedGuard = (WrappedComponent: FC) => () => {
  const user: UserModel | undefined = useUser();
  const history = useHistory();

  if (user) {
    history.push(ROUTER_KEYS.ROOT);
  }

  return <WrappedComponent />;
};
