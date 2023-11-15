import { checkSchema, ValidationChain } from 'express-validator/check';
import { Access, Status } from '../../../types/todos.type';

export const updateTodoSchema: ValidationChain[] = checkSchema({
  title: {
    in: 'body',
    optional: true,
    isString: { errorMessage: 'Title is not a string' }
  },
  content: {
    in: 'body',
    optional: true,
    isString: { errorMessage: 'Title is not a string' }
  },
  status: {
    in: 'body',
    optional: true,
    isString: { errorMessage: 'Status is not a string' },
    isIn: {
      options: [[Status.inProgress, Status.Completed]],
      errorMessage: `Status must be ${Status.inProgress} or ${Status.Completed}`
    }
  },
  access: {
    in: 'body',
    optional: true,
    isString: { errorMessage: 'Access is not a string' },
    isIn: {
      options: [[Access.Public, Access.Private]],
      errorMessage: `Access must be ${Access.Public} or ${Access.Private}`
    }
  }
});
