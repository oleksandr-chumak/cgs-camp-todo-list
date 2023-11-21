import React from 'react';
import BaseAuthForm from '../../features/components/BaseAuthForm/base-auth-form.component';
import { ROUTER_KEYS } from '../../../common/consts/app-keys.const';
import { useAuthMutation } from '../../features/hooks/query/auth-mutation.hook';
import { AuthService } from '../../services/auth.service';
import { resetPasswordRequestSchema } from '../../features/schemas/auth.schemas';

const ResetPasswordRequestForm = () => {
  const authService: AuthService = new AuthService();
  const { mutate } = useAuthMutation({
    mutationFn: authService.resetPasswordRequest,
    onSuccessMessage: 'Email with reset link sent',
    onSuccessRedirect: ROUTER_KEYS.LOGIN
  });

  return (
    <BaseAuthForm
      title="Forget Password"
      submitButtonText="Send mail"
      redirectUrl={ROUTER_KEYS.LOGIN}
      redirectName="Back To Login"
      validationSchema={resetPasswordRequestSchema}
      onSubmit={mutate}
    />
  );
};

export default ResetPasswordRequestForm;
