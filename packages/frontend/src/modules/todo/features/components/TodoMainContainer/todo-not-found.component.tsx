import React from 'react';
import * as Styled from './todo-main-container.styled';

const TodoNotFound = () => (
  <Styled.TodoMainContainerLoadingWrapper>
    <Styled.TodoNotFoundWrapper>
      <Styled.TodoNotFoundIcon />
      <Styled.TodoNotFoundHeader>Not found</Styled.TodoNotFoundHeader>
    </Styled.TodoNotFoundWrapper>
  </Styled.TodoMainContainerLoadingWrapper>
);

export default TodoNotFound;
