import { useQuery } from 'react-query';
import toast from 'react-hot-toast';
import TodoService from '../../../services/todo.service';
import { QUERY_KEYS } from '../../../../common/consts/app-keys.const';

export const useGetTodo = (id: number) => {
  const todoService: TodoService = new TodoService();

  const handleError = (error: Error) => {
    toast.error(error.message);
  };

  const query = useQuery({
    queryKey: [QUERY_KEYS.TODO, id],
    cacheTime: 0,
    queryFn: () => todoService.getTodo(id),
    onError: handleError
  });

  return query;
};
