import React from 'react';
import { ClockLoader } from 'react-spinners';
import { useGetTodo } from '../../hooks/query/get-todo.hook';
import TodoElementIndicators from '../TodoElement/todo-element-indicators.component';
import * as Styled from './todo-show-modal.styled';

const TodoShowModal = ({ id }: { id: number }) => {
  const { data, isLoading } = useGetTodo(id);

  if (isLoading) {
    return (
      <Styled.TodoShowModalLoadingWrapper>
        <ClockLoader />
      </Styled.TodoShowModalLoadingWrapper>
    );
  }

  return data ? (
    <Styled.TodoShowModalWrapper>
      <Styled.TodoShowModalHeader>{data.title}</Styled.TodoShowModalHeader>
      <Styled.TodoShowModalContent>{data.content}</Styled.TodoShowModalContent>
      <TodoElementIndicators status={data.status} access={data.access} />
    </Styled.TodoShowModalWrapper>
  ) : null;
};

export default TodoShowModal;
