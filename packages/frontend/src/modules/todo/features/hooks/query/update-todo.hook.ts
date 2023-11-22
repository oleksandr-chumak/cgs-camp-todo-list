/* eslint-disable */
import { useMutation, useQueryClient } from 'react-query';
import toast from 'react-hot-toast';
import TodoService from '../../../services/todo.service';
import { EditTodoOptions, GetTodos, UpdateTodo } from "../../types/todos.type";
import { TodoModel } from '../../../models/todo.model';
import { QUERY_KEYS } from '../../../../common/consts/app-keys.const';

export const useUpdateTodo = (options?: EditTodoOptions) => {
  const queryClient = useQueryClient();
  const todoService: TodoService = new TodoService();

  const handleError = (error: Error) => {
    toast.error(error.message);

    if (options?.onError) {
      options.onError(error);
    }
  };

  const handleSuccess = (data: string) => {
    queryClient.refetchQueries(QUERY_KEYS.TODOS);

    if (options?.onSuccess) {
      options.onSuccess(data);
    }
  };

  const mutation = useMutation({
    mutationFn: todoService.updateTodo,
    onSuccess: handleSuccess,
    onError: handleError
  });

  const updateTodo = (updateData: UpdateTodo) => {
    mutation.mutate(updateData);
  };

  return { updateTodo };
};
