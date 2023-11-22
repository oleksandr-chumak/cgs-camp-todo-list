import { TodoNavigationName } from '../types/todo-header.type';
import { SEARCH_QUERY_KEYS } from '../../../common/consts/app-keys.const';
import { ACCESS, STATUS } from '../types/todos.type';

export const TODO_NAVIGATION_EXCLUDE_SEARCH_QUERY: Record<TodoNavigationName, string[]> = {
  [TodoNavigationName.ALL]: [SEARCH_QUERY_KEYS.ACCESS, SEARCH_QUERY_KEYS.STATUS],
  [TodoNavigationName.PRIVATE]: [SEARCH_QUERY_KEYS.STATUS],
  [TodoNavigationName.PUBLIC]: [SEARCH_QUERY_KEYS.STATUS],
  [TodoNavigationName.COMPLETED]: [SEARCH_QUERY_KEYS.ACCESS]
};

export const TODO_NAVIGATION_QUERY_NAME: Record<TodoNavigationName, string> = {
  [TodoNavigationName.ALL]: '',
  [TodoNavigationName.PRIVATE]: SEARCH_QUERY_KEYS.ACCESS,
  [TodoNavigationName.PUBLIC]: SEARCH_QUERY_KEYS.ACCESS,
  [TodoNavigationName.COMPLETED]: SEARCH_QUERY_KEYS.STATUS
};

export const TODO_NAVIGATION_QUERY_VALUE: Record<TodoNavigationName, string> = {
  [TodoNavigationName.ALL]: '',
  [TodoNavigationName.PRIVATE]: ACCESS.PRIVATE,
  [TodoNavigationName.PUBLIC]: ACCESS.PUBLIC,
  [TodoNavigationName.COMPLETED]: STATUS.COMPLETED
};
