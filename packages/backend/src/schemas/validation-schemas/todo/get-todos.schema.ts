import { checkSchema, ValidationChain } from 'express-validator/check';
import { Access, Status } from '../../../types/todos.type';
import { isEnumOrEnumArray } from '../../../shared/validators/is-type-or-type-array';

export const getTodosSchema: ValidationChain[] = checkSchema({
  title: {
    in: 'query',
    optional: true,
    isString: {
      errorMessage: 'Title must be a string'
    }
  },
  content: {
    in: 'query',
    optional: true,
    isString: {
      errorMessage: 'Content must be a string'
    }
  },
  status: {
    in: 'query',
    optional: true,
    custom: {
      options: isEnumOrEnumArray(Status),
      errorMessage: `Status must be ${Status.inProgress} or ${Status.Completed}`
    }
  },
  access: {
    in: 'query',
    optional: true,
    custom: {
      options: isEnumOrEnumArray(Access),
      errorMessage: `Access must be ${Access.Public} or ${Access.Private}`
    }
  },
  userId: {
    in: 'query',
    optional: true,
    isInt: {
      options: {
        gt: -1
      },
      errorMessage: 'User id must be integer and positive'
    }
  }
});
