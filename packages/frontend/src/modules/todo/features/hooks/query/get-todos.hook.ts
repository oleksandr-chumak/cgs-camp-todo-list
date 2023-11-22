import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
import TodoService from '../../../services/todo.service';
import { QUERY_KEYS } from '../../../../common/consts/app-keys.const';
import { useFiltrationQuery } from '../filtration-query.hook';
import { todosQuerySchema } from '../../schemas/query-validation-schemas/todos-query.schema';
import { TodosFilterQuery } from '../../types/todo-service.type';
import { useUser } from '../../../../auth/features/hooks/user.hook';
import { UserModel } from '../../../../auth/models/user.model';
import { isUserWithPrivateAccess } from '../../validators/is-user-with-private-access';

export const useGetTodos = () => {
  const user: UserModel | undefined = useUser();
  const searchQuery: TodosFilterQuery | null = useFiltrationQuery(todosQuerySchema, {
    access: (value) => isUserWithPrivateAccess(value, user)
  });
  const todoService: TodoService = new TodoService();

  const handleError = (error: Error) => {
    toast.error(error.message);
  };

  const query = useQuery({
    queryKey: [QUERY_KEYS.TODOS],
    queryFn: () => todoService.getTodos(searchQuery!),
    onError: handleError,
    enabled: false
  });

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    query.refetch();
  }, [searchQuery]);

  return query;
};
