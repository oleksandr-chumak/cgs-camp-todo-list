import React, { FC } from 'react';
import { TodoListProps } from '../../../features/types/todos.type';
import TodoElement from '../../../features/components/TodoElement/todo-element.component';

const MobileTodoList: FC<TodoListProps> = ({ todos }) => (
  <>
    {todos.map((todo) => (
      <TodoElement {...todo} formattedDate={todo.formattedDate} key={`${todo.id}-todo-el`} />
    ))}
  </>
);

export default MobileTodoList;
