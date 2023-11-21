import toast from 'react-hot-toast';
import { useAuthMutation } from './auth-mutation.hook';
import { ROUTER_KEYS } from '../../../../common/consts/app-keys.const';
import { UserService } from '../../../services/user.service';
import { useModalContext } from '../../../../common/hooks/modal-context.hook';

export const useResetPasswordLocal = () => {
  const userService: UserService = new UserService();
  const { closeModal } = useModalContext();

  const onSuccess = (_: string, message: string) => {
    toast.success(message);
    closeModal();
  };

  const { mutate } = useAuthMutation({
    mutationFn: userService.updateUser,
    onSuccessMessage: 'Password reset',
    onSuccessRedirect: ROUTER_KEYS.ROOT,
    onSuccess
  });

  return { resetPasswordLocal: mutate };
};
