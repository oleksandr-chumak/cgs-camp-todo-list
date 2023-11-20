import { Router } from 'express';
import { UserController } from '../../controllers/user.controller';
import { UserService } from '../../services/user.service';
import { onlyAuthorizedMiddleware } from '../../middleware/auth/only-authorized.middleware';
import { IsExistMiddleware } from '../../middleware/is-exist.middleware';
import { checkOwnershipMiddleware } from '../../middleware/auth/check-ownership.middleware';
import { UserEntity } from '../../entities';
import { validateMiddleware } from '../../middleware/validate.middleware';
import { updateUserSchema } from '../../schemas/validation-schemas/user/update-user.schema';
import { Middleware } from '../../types/middleware.type';

const router: Router = Router();

const userController: UserController = new UserController(new UserService());
const isSameUser: Middleware = checkOwnershipMiddleware(['id']);

const isUserExist = IsExistMiddleware({
  baseEntity: UserEntity,
  reqField: 'id',
  dbFields: ['id'],
  where: 'params'
});

router.get('/', ...onlyAuthorizedMiddleware(), userController.show);

router.put(
  '/:id',
  [...onlyAuthorizedMiddleware(), isUserExist, isSameUser, ...validateMiddleware(updateUserSchema)],
  userController.update
);

export default router;
