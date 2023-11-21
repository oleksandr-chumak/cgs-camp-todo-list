import React from 'react';
import BaseAuthForm from '../../features/components/BaseAuthForm/base-auth-form.component';
import { ROUTER_KEYS } from '../../../common/consts/app-keys.const';
import { AuthService } from '../../services/auth.service';
import { useAuthMutation } from '../../features/hooks/query/auth-mutation.hook';
import { registrationSchema } from '../../features/schemas/auth.schemas';

const RegistrationForm = () => {
  const authService: AuthService = new AuthService();
  const { mutate } = useAuthMutation({
    mutationFn: authService.register,
    onSuccessMessage: 'Confirmation mail sent',
    onSuccessRedirect: ROUTER_KEYS.LOGIN
  });

  return (
    <BaseAuthForm
      title="Registration"
      submitButtonText="Register"
      redirectUrl={ROUTER_KEYS.LOGIN}
      redirectName="Back To Login"
      validationSchema={registrationSchema}
      onSubmit={mutate}
    />
  );
};

export default RegistrationForm;
