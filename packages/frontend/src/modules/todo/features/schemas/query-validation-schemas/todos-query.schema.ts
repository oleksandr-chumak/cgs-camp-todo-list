import * as Yup from 'yup';
import { ACCESS, STATUS } from '../../types/todos.type';

export const todosQuerySchema = Yup.object({
  access: Yup.string()
    .oneOf([ACCESS.PUBLIC, ACCESS.PRIVATE], 'access')
    .test('access', 'access', function () {
      return !this.parent.status;
    })
    .optional(),
  status: Yup.string()
    .oneOf([STATUS.COMPLETED], 'status')
    .test('status', 'status', function () {
      return !this.parent.access;
    })
    .optional(),
  title: Yup.string().min(1, 'title').optional()
});
