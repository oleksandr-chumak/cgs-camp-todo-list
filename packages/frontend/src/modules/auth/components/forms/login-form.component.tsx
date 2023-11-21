import React from 'react';
import BaseAuthForm from '../../features/components/BaseAuthForm/base-auth-form.component';
import { ROUTER_KEYS } from '../../../common/consts/app-keys.const';
import { useLogin } from '../../features/hooks/query/login.hook';
import { loginSchema } from '../../features/schemas/auth.schemas';

const LoginForm = () => {
  const { login } = useLogin();

  return (
    <BaseAuthForm
      title="Login"
      submitButtonText="Login"
      redirectUrl={ROUTER_KEYS.RESET_PASSWORD_REQUEST}
      redirectName="Forget Password?"
      validationSchema={loginSchema}
      onSubmit={login}
    />
  );
};
export default LoginForm;
