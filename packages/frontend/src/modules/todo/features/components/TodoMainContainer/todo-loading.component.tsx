import React from 'react';
import { ClockLoader } from 'react-spinners';
import * as Styled from './todo-main-container.styled';

const TodoLoading = () => (
  <Styled.TodoMainContainerLoadingWrapper>
    <ClockLoader />
  </Styled.TodoMainContainerLoadingWrapper>
);

export default TodoLoading;
