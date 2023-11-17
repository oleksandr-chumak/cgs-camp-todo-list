/* eslint-disable */
import { useMutation, useQueryClient } from 'react-query';
import toast from 'react-hot-toast';
import TodoService from '../../../services/todo.service';
import { GetTodos, UpdateTodo } from '../../types/todos.type';
import { TodoModel } from '../../../models/todo.model';
import { QUERY_KEYS } from '../../../../common/consts/app-keys.const';

export const useUpdateTodo = (options?: {
  fetch: boolean;
  onSuccess?: (data: string) => void;
  onError?: (error: Error) => void;
}) => {
  const queryClient = useQueryClient();
  const todoService: TodoService = new TodoService();

  const handleError = (error: Error) => {
    toast.error(error.message);

    if (options?.onError) {
      options.onError(error);
    }
  };

  const handleSuccess = (data: string) => {
    if (options?.fetch) {
      queryClient.invalidateQueries(['todos']);
    }

    if (options?.onSuccess) {
      options.onSuccess(data);
    }
  };

  const mutation = useMutation({
    mutationFn: todoService.updateTodo,
    onSuccess: handleSuccess,
    onError: handleError
  });

  const updateTodoWithoutFetching = (updateData: UpdateTodo) => {
    queryClient.setQueryData([QUERY_KEYS.TODOS], (oldData: GetTodos | undefined): GetTodos => {
      if (!oldData) {
        return { totalCount: 0, todos: [] } as GetTodos;
      }

      const updatedData: GetTodos = { ...oldData };

      const updatedTodos: TodoModel[] = updatedData.todos.map((todo) =>
        (todo.id === updateData.id ? new TodoModel({ ...todo, ...updateData }) : todo)
      );

      updatedData.todos = updatedTodos;

      return updatedData;
    });
  };

  const updateTodo = (updateData: UpdateTodo) => {
    mutation.mutate(updateData);

    if (options?.fetch) {
      return;
    }

    updateTodoWithoutFetching(updateData);
  };

  return { updateTodo };
};
