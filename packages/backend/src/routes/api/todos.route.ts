import { Router } from 'express';
import todoController from '../../controllers/todo.controller';
import { createTodoSchema, updateTodoSchema } from '../../schemas/validation-schemas/todo';
import { IsExistMiddleware } from '../../middleware/is-exist.middleware';
import { TodoEntity } from '../../entities';
import { validateMiddleware } from '../../middleware/validate.middleware';
import { paginationMiddleware } from '../../middleware/pagination.middleware';
import { getTodosSchema } from '../../schemas/validation-schemas/todo/get-todos.schema';
import { transformMiddleware } from '../../middleware/transform.middleware';
import { todoFilerSchema } from '../../schemas/transform-schemas/todo/todo-filter.schema';
import { onlyAuthorizedMiddleware } from '../../middleware/auth/only-authorized.middleware';
import { checkOwnershipMiddleware } from '../../middleware/auth/check-ownership.middleware';
import { extractUserFromHeaderMiddleware } from '../../middleware/auth/extract-user-from-header.middleware';

const todosRouter: Router = Router();

const isExist = IsExistMiddleware({
  baseEntity: TodoEntity,
  where: 'params',
  dbFields: ['id'],
  reqField: 'id',
  relations: ['user'],
  message: 'Todo not found'
});

const isSameUser = checkOwnershipMiddleware(['user', 'id']);

todosRouter.get(
  '/',
  ...[
    extractUserFromHeaderMiddleware,
    ...paginationMiddleware(),
    ...validateMiddleware(getTodosSchema),
    transformMiddleware('query', todoFilerSchema)
  ],
  todoController.index.bind(todoController)
);

todosRouter.get('/:id', isExist, todoController.show.bind(todoController));

todosRouter.post(
  '/',
  ...onlyAuthorizedMiddleware(),
  ...validateMiddleware(createTodoSchema),
  todoController.store.bind(todoController)
);

todosRouter.put(
  '/:id',
  ...[...onlyAuthorizedMiddleware(), isExist, isSameUser, ...validateMiddleware(updateTodoSchema)],
  todoController.update.bind(todoController)
);

todosRouter.patch(
  '/:id',
  ...[...onlyAuthorizedMiddleware(), isExist, isSameUser, ...validateMiddleware(updateTodoSchema)],
  todoController.update.bind(todoController)
);

todosRouter.delete(
  '/:id',
  [...onlyAuthorizedMiddleware(), isExist, isSameUser],
  todoController.destroy.bind(todoController)
);

export default todosRouter;
