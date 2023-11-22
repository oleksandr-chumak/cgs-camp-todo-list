import { QueryClient, useMutation, useQueryClient } from 'react-query';
import toast from 'react-hot-toast';
import TodoService from '../../../services/todo.service';
import { useModalContext } from '../../../../common/hooks/modal-context.hook';
import { ICreateTodo } from '../../types/todo-service.type';
import { QUERY_KEYS } from '../../../../common/consts/app-keys.const';

export const useCreateTodo = () => {
  const todoService: TodoService = new TodoService();
  const query: QueryClient = useQueryClient();
  const { closeModal } = useModalContext();

  const handleSuccess = (): void => {
    query.refetchQueries(QUERY_KEYS.TODOS);
    toast.success('Todo created');
    closeModal();
  };

  const handleError = (error: Error): void => {
    toast.error(error.message);
  };

  const mutation = useMutation({
    mutationFn: todoService.createTodo,
    onSuccess: handleSuccess,
    onError: handleError
  });

  const createTodo = (data: ICreateTodo): void => {
    mutation.mutate(data);
  };

  return { createTodo };
};
