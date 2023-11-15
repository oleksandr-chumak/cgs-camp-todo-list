import { checkSchema } from 'express-validator/check';

export const paginationSchema = checkSchema({
  skip: {
    in: 'query',
    optional: true,
    isInt: {
      options: {
        gt: -1
      },
      errorMessage: 'Skip must be int and positive'
    }
  },
  limit: {
    in: 'query',
    optional: true,
    isInt: {
      options: { gt: -1, max: 100 },
      errorMessage: 'Limit must be integer and in diapason from 0 to 100'
    }
  }
});
