import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import TodoService from '../../../services/todo.service';

export const useGetTodos = () => {
  const todoService: TodoService = new TodoService();

  const handleError = (error: Error) => {
    toast.error(error.message);
  };

  const query = useQuery({
    queryKey: ['todos'],
    queryFn: todoService.getTodos,
    onError: handleError
  });

  return query;
};
