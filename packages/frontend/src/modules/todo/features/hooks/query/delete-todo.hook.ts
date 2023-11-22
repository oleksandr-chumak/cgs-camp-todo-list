import { QueryClient, useMutation, useQueryClient } from 'react-query';
import toast from 'react-hot-toast';
import TodoService from '../../../services/todo.service';
import { QUERY_KEYS } from '../../../../common/consts/app-keys.const';

export const useDeleteTodo = (id: number) => {
  const todoService: TodoService = new TodoService();
  const query: QueryClient = useQueryClient();

  const handleSuccess = () => {
    query.refetchQueries(QUERY_KEYS.TODOS);
    toast.success('Todo deleted');
  };

  const handleError = (error: Error) => {
    toast.error(error.message);
  };

  const mutation = useMutation({
    mutationFn: todoService.deleteTodo,
    onSuccess: handleSuccess,
    onError: handleError
  });

  const deleteTodo = () => {
    if (mutation.isLoading) {
      return;
    }

    mutation.mutate(id);
  };

  return { deleteTodo };
};
