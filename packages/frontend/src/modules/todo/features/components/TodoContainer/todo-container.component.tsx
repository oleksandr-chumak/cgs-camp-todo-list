import React, { FC, Suspense } from 'react';
import { ClockLoader } from 'react-spinners';
import * as Styled from './todo-container.styled';
import TodoHeader from '../TodoHeader/todo-header.component';
import TodoMainContainer from '../TodoMainContainer/todo-main-container.component';
import { TodoListProps } from '../../types/todos.type';
import { DisplayName } from '../../../../common/types/media/display.type';
import { TODO_LIST } from '../../const/todo-list.const';
import { useDisplay } from '../../hooks/display.hook';
import { useGetTodos } from '../../hooks/query/get-todos.hook';
import { TodoMainContainerLoadingWrapper } from '../TodoMainContainer/todo-main-container.styled';

const TodoContainer = () => {
  const display: DisplayName = useDisplay();
  const { data } = useGetTodos();

  const TodoList: FC<TodoListProps> = TODO_LIST[display];

  return (
    <Styled.TodoContainerWrapper>
      <TodoHeader />
      <TodoMainContainer>
        <Suspense
          fallback={
            <TodoMainContainerLoadingWrapper>
              <ClockLoader />
            </TodoMainContainerLoadingWrapper>
          }
        >
          {data ? <TodoList todos={data.todos} /> : null}
        </Suspense>
      </TodoMainContainer>
    </Styled.TodoContainerWrapper>
  );
};

export default TodoContainer;
