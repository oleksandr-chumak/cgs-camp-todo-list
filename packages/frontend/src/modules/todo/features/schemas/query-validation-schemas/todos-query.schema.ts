import * as Yup from 'yup';
import { ACCESS, STATUS } from '../../types/todos.type';
import { SEARCH_QUERY_KEYS } from '../../../../common/consts/app-keys.const';

export const todosQuerySchema = Yup.object({
  access: Yup.string()
    .oneOf([ACCESS.PUBLIC, ACCESS.PRIVATE], SEARCH_QUERY_KEYS.ACCESS)
    .test(SEARCH_QUERY_KEYS.ACCESS, SEARCH_QUERY_KEYS.ACCESS, function () {
      return !this.parent.status;
    })
    .optional()
    .typeError(SEARCH_QUERY_KEYS.ACCESS),
  status: Yup.string()
    .oneOf([STATUS.COMPLETED], SEARCH_QUERY_KEYS.STATUS)
    .test(SEARCH_QUERY_KEYS.STATUS, SEARCH_QUERY_KEYS.STATUS, function () {
      return !this.parent.access;
    })
    .optional()
    .typeError(SEARCH_QUERY_KEYS.STATUS),
  title: Yup.string().min(1, SEARCH_QUERY_KEYS.TITLE).optional().typeError(SEARCH_QUERY_KEYS.TITLE),
  page: Yup.number()
    .default(1)
    .positive(SEARCH_QUERY_KEYS.PAGE)
    .required(SEARCH_QUERY_KEYS.PAGE)
    .typeError(SEARCH_QUERY_KEYS.PAGE)
});
