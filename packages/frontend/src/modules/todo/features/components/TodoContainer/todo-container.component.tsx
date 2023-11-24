import React, { FC, Suspense } from 'react';
import * as Styled from './todo-container.styled';
import TodoHeader from '../TodoHeader/todo-header.component';
import TodoMainContainer from '../TodoMainContainer/todo-main-container.component';
import { TodoListProps } from '../../types/todos.type';
import { TODO_LIST } from '../../const/todo-list.const';
import { useGetTodos } from '../../hooks/query/get-todos.hook';
import TodoPagination from '../TodoPagination/todo-pagination';
import TodoLoading from '../TodoMainContainer/todo-loading.component';
import TodoNotFound from '../TodoMainContainer/todo-not-found.component';

const TodoContainer = () => {
  const { data, isLoading, isRefetching, display, currentPage } = useGetTodos();

  const isTodosLoading: boolean = (isLoading || isRefetching) && display !== 'tablet';
  const isTodosNotEmpty = data && currentPage && !isTodosLoading;
  const isTodosNotFound: boolean = !isTodosLoading && data?.todos.length === 0;

  const TodoList: FC<TodoListProps> = TODO_LIST[display];

  return (
    <Styled.TodoContainerWrapper>
      <TodoHeader />
      <TodoMainContainer>
        <Suspense fallback={<TodoLoading />}>
          {isTodosNotFound ? <TodoNotFound /> : null}
          {isTodosLoading ? <TodoLoading /> : null}
          {isTodosNotEmpty ? (
            <TodoList
              todos={data.todos}
              totalCount={data.totalCount}
              currentPage={currentPage}
              isLoading={isLoading || isRefetching}
            />
          ) : null}
        </Suspense>
      </TodoMainContainer>
      {display !== 'tablet' ? (
        <TodoPagination totalCount={data?.totalCount} currentPage={currentPage} />
      ) : null}
    </Styled.TodoContainerWrapper>
  );
};

export default TodoContainer;
