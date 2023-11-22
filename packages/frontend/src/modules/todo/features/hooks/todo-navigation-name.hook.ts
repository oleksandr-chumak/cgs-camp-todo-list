import { useEffect, useState } from 'react';
import { TodosFilterQuery } from '../types/todo-service.type';
import { useFiltrationQuery } from './filtration-query.hook';
import { todosQuerySchema } from '../schemas/query-validation-schemas/todos-query.schema';
import { ACCESS, STATUS } from '../types/todos.type';
import { TodoNavigationName } from '../types/todo-header.type';

export const useTodoNavigationName = () => {
  const [navigationName, setNavigationName] = useState<TodoNavigationName | null>(null);
  const searchQuery: TodosFilterQuery | null = useFiltrationQuery(todosQuerySchema);

  const determineNavigationName = (query: TodosFilterQuery) => {
    if (query.access === ACCESS.PRIVATE) {
      return TodoNavigationName.PRIVATE;
    }
    if (query.access === ACCESS.PUBLIC) {
      return TodoNavigationName.PUBLIC;
    }
    if (query.status === STATUS.COMPLETED) {
      return TodoNavigationName.COMPLETED;
    }
    return TodoNavigationName.ALL;
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const name: TodoNavigationName = determineNavigationName(searchQuery);

    setNavigationName(name);
  }, [searchQuery]);

  return navigationName;
};
