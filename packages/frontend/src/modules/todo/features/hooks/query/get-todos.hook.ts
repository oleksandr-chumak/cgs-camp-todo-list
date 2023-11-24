import { useQuery, useQueryClient } from 'react-query';
import toast from 'react-hot-toast';
import { useEffect, useRef } from 'react';
import TodoService from '../../../services/todo.service';
import { QUERY_KEYS, TODOS_LIMIT } from '../../../../common/consts/app-keys.const';
import { useFiltrationQuery } from '../filtration-query.hook';
import { todosQuerySchema } from '../../schemas/query-validation-schemas/todos-query.schema';
import { TodosFilterQuery } from '../../types/todo-service.type';
import { useUser } from '../../../../auth/features/hooks/user.hook';
import { UserModel } from '../../../../auth/models/user.model';
import { isUserWithPrivateAccess } from '../../validators/is-user-with-private-access';
import { GetTodos } from '../../types/todos.type';
import { useSearchQueryNavigation } from '../../../../common/hooks/search-query-navigation.hook';
import { DisplayName } from '../../../../common/types/media/display.type';
import { useDisplay } from '../display.hook';
import { parseQueryString } from '../../../../common/utils/parse-query-string';

export const useGetTodos = () => {
  const display: DisplayName = useDisplay();
  const user: UserModel | undefined = useUser();
  const { navigate } = useSearchQueryNavigation();
  const queryClient = useQueryClient();
  const searchQuery: TodosFilterQuery | null = useFiltrationQuery(todosQuerySchema, {
    access: (value) => isUserWithPrivateAccess(value as string | undefined, user)
  });

  const todoService: TodoService = new TodoService();
  const limit = useRef<number>();

  const handleError = (error: Error) => {
    toast.error(error.message);
  };

  const onSuccess = async (data: GetTodos) => {
    if (!data) {
      return;
    }
    const lastPage: number = Math.ceil(data.totalCount / TODOS_LIMIT) || 1;
    if (searchQuery && searchQuery.page > lastPage) {
      await navigate({ page: `${lastPage}` });
      queryClient.refetchQueries(QUERY_KEYS.TODOS);
    }
  };

  const handleRefetchQuery = () => {
    const query: TodosFilterQuery = parseQueryString() as unknown as TodosFilterQuery;
    return todoService.getTodos(query, limit.current);
  };

  const query = useQuery({
    queryKey: [QUERY_KEYS.TODOS],
    queryFn: handleRefetchQuery,
    onError: handleError,
    onSuccess,
    enabled: false
  });

  useEffect(() => {
    if (display === 'tablet') {
      limit.current = TODOS_LIMIT * 3;
    } else {
      limit.current = undefined;
    }
    query.refetch();
  }, [display]);

  useEffect(() => {
    if (!searchQuery || display === 'tablet') {
      return;
    }
    if (searchQuery && !searchQuery.page) {
      navigate({ page: '1' });
      return;
    }

    query.refetch();
  }, [searchQuery, display]);

  return {
    ...query,
    currentPage: searchQuery ? searchQuery.page : undefined,
    display
  };
};
