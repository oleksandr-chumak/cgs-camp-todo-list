import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { validateJWT } from '../utils/validate-jwt';
import { ROUTER_KEYS } from '../../../common/consts/app-keys.const';
import { extractParamsFromUrl } from '../utils/extract-params-from-url';

export const onlyValidJwtInParamsGuard = (WrapperComponent: FC, redirect?: string) => () => {
  const history = useHistory();
  const token: string = extractParamsFromUrl();

  if (!validateJWT(token)) {
    history.push(redirect || ROUTER_KEYS.RESET_PASSWORD_REQUEST);
  }

  return <WrapperComponent />;
};
