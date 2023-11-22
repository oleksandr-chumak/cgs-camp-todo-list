import { UserModel } from '../../../auth/models/user.model';
import { ACCESS } from '../types/todos.type';

export const isUserWithPrivateAccess = (value: string | undefined, user: UserModel | undefined) =>
  !(!user && value === ACCESS.PRIVATE);
