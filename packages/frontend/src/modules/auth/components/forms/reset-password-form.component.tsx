import React from 'react';
import BaseAuthForm from '../../features/components/BaseAuthForm/base-auth-form.component';
import { ROUTER_KEYS } from '../../../common/consts/app-keys.const';
import { ResetPasswordData } from '../../features/types/auth-service.type';
import { useResetPassword } from '../../features/hooks/query/reset-password.hook';
import { extractParamsFromUrl } from '../../features/utils/extract-params-from-url';
import { resetPasswordSchema } from '../../features/schemas/auth.schemas';

const ResetPasswordForm = () => {
  const { resetPassword } = useResetPassword();

  const handleSubmit = (resetData: Omit<ResetPasswordData, 'token'>): void => {
    const token: string = extractParamsFromUrl();
    resetPassword({ token, ...resetData });
  };

  return (
    <BaseAuthForm
      title="Reset Password"
      submitButtonText="Reset Password"
      redirectUrl={ROUTER_KEYS.LOGIN}
      redirectName="Back To Login"
      validationSchema={resetPasswordSchema}
      onSubmit={handleSubmit}
    />
  );
};
export default ResetPasswordForm;
