import React, { FC, useMemo } from 'react';
import * as Styled from './todo-element.styled';
import { STATUS, TodoElementActionsProps } from '../../types/todos.type';
import { Toggle } from '../../../../common/components/UI/Toggle/toggle';
import { useModalContext } from '../../../../common/hooks/modal-context.hook';
import { useDeleteTodo } from '../../hooks/query/delete-todo.hook';
import { useUpdateTodo } from '../../hooks/query/update-todo.hook';
import EditTodoForm from '../../../components/forms/EditTodoForm/edit-todo-form.component';

const TodoElementActions: FC<TodoElementActionsProps> = ({ id, status }) => {
  const { updateTodo } = useUpdateTodo();
  const { deleteTodo } = useDeleteTodo(id);
  const { openModal } = useModalContext();

  const handleToggleChange = (isActive: boolean) => {
    updateTodo({
      id,
      status: isActive ? STATUS.COMPLETED : STATUS.IN_PROGRESS
    });
  };

  const initialChecked: boolean = useMemo(() => status === STATUS.COMPLETED, []);

  return (
    <Styled.TodoElementActionsWrapper>
      <Styled.DeleteIcon onClick={deleteTodo} />
      <Styled.EditIcon onClick={() => openModal(<EditTodoForm id={id} />)} />
      <Toggle onChange={handleToggleChange} initialState={initialChecked} />
    </Styled.TodoElementActionsWrapper>
  );
};

export default TodoElementActions;
