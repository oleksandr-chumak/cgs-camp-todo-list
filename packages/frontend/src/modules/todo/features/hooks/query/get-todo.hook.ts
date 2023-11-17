import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import TodoService from '../../../services/todo.service';

export const useGetTodo = (id: number) => {
  const todoService: TodoService = new TodoService();

  const handleError = (error: Error) => {
    toast.error(error.message);
  };

  const query = useQuery({
    queryKey: ['todos', id],
    cacheTime: 0,
    queryFn: () => todoService.getTodo(id),
    onError: handleError
  });

  return query;
};
