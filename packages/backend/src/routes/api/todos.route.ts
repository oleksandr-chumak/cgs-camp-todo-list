import { Router } from 'express';
import todoController from '../../controllers/todo.controller';
import { createTodoSchema, updateTodoSchema } from '../../schemas/validation-schemas/todo';
import { IsExistMiddleware } from '../../middleware/is-exist.middleware';
import { TodoEntity } from '../../entities';
import { validateMiddleware } from '../../middleware/validate.middleware';
import { paginationMiddleware } from '../../middleware/pagination.middleware';
import { getTodosSchema } from '../../schemas/validation-schemas/todo/get-todos.schema';
import { transformMiddleware } from '../../middleware/transform.middleware';
import { toDoFilerSchema } from '../../schemas/transform-schemas/todo/todo-filter.schema';

const todosRouter: Router = Router();

todosRouter.get(
  '/',
  ...[
    ...paginationMiddleware(),
    ...validateMiddleware(getTodosSchema),
    transformMiddleware('query', toDoFilerSchema)
  ],
  todoController.index.bind(todoController)
);

todosRouter.get(
  '/:id',
  ...[IsExistMiddleware(TodoEntity, 'Todo not found')],
  todoController.show.bind(todoController)
);

todosRouter.post(
  '/',
  ...validateMiddleware(createTodoSchema),
  todoController.store.bind(todoController)
);

todosRouter.put(
  '/:id',
  ...[IsExistMiddleware(TodoEntity, 'Todo not found'), ...validateMiddleware(updateTodoSchema)],
  todoController.update.bind(todoController)
);

todosRouter.patch(
  '/:id',
  ...[IsExistMiddleware(TodoEntity, 'Todo not found'), ...validateMiddleware(updateTodoSchema)],
  todoController.update.bind(todoController)
);

todosRouter.delete(
  '/:id',
  ...[IsExistMiddleware(TodoEntity, 'Todo not found')],
  todoController.destroy.bind(todoController)
);

export default todosRouter;
