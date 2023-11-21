import React from 'react';
import BaseAuthForm from '../../features/components/BaseAuthForm/base-auth-form.component';
import { resetPasswordLocalSchema } from '../../features/schemas/auth.schemas';
import { useResetPasswordLocal } from '../../features/hooks/query/reset-password-local.hook';
import { UpdateUserData } from '../../features/types/user-service.type';
import { useUser } from '../../features/hooks/user.hook';
import { UserModel } from '../../models/user.model';

const ResetPasswordLocalForm = () => {
  const { resetPasswordLocal } = useResetPasswordLocal();
  const user: UserModel = useUser() as UserModel;

  const handleSubmit = (resetData: Omit<UpdateUserData, 'id'>): void => {
    resetPasswordLocal({ id: user.id, ...resetData });
  };

  return (
    <BaseAuthForm
      title="Reset Password"
      submitButtonText="Reset Password"
      validationSchema={resetPasswordLocalSchema}
      onSubmit={handleSubmit}
      isModal
    />
  );
};

export default ResetPasswordLocalForm;
