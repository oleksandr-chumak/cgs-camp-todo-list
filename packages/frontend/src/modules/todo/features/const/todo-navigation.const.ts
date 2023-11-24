import { TodoNavigationName } from '../types/todo-header.type';
import { SEARCH_QUERY_KEYS } from '../../../common/consts/app-keys.const';
import { ACCESS, STATUS } from '../types/todos.type';

export const TODO_NAVIGATION_EXCLUDE_SEARCH_QUERY: Record<TodoNavigationName, string[]> = {
  [TodoNavigationName.ALL]: [SEARCH_QUERY_KEYS.ACCESS, SEARCH_QUERY_KEYS.STATUS],
  [TodoNavigationName.PRIVATE]: [SEARCH_QUERY_KEYS.STATUS],
  [TodoNavigationName.PUBLIC]: [SEARCH_QUERY_KEYS.STATUS],
  [TodoNavigationName.COMPLETED]: [SEARCH_QUERY_KEYS.ACCESS]
};

export const TODO_NAVIGATION_QUERY: Record<TodoNavigationName, Record<string, string>> = {
  [TodoNavigationName.ALL]: { page: '1' },
  [TodoNavigationName.PRIVATE]: { access: ACCESS.PRIVATE, page: '1' },
  [TodoNavigationName.PUBLIC]: { access: ACCESS.PUBLIC, page: '1' },
  [TodoNavigationName.COMPLETED]: { status: STATUS.COMPLETED, page: '1' }
};
