import { QueryClient, useMutation, useQueryClient } from 'react-query';
import toast from 'react-hot-toast';
import TodoService from '../../../services/todo.service';

export const useDeleteTodo = (id: number) => {
  const todoService: TodoService = new TodoService();
  const query: QueryClient = useQueryClient();

  const handleSuccess = () => {
    query.invalidateQueries({ queryKey: ['todos'] });
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
