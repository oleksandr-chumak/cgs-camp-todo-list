import React from 'react';
import * as Styled from './todo-header.styled';

const TodoHeader = () => (
  <Styled.TodoHeaderWrapper>
    <Styled.TodoNavigation>
      <Styled.TodoNavigationElement>All</Styled.TodoNavigationElement>
      <Styled.TodoNavigationElement>Private</Styled.TodoNavigationElement>
      <Styled.TodoNavigationElement>Public</Styled.TodoNavigationElement>
      <Styled.TodoNavigationElement>Completed</Styled.TodoNavigationElement>
    </Styled.TodoNavigation>
    <Styled.TodoSearchField placeholder="Search" />
  </Styled.TodoHeaderWrapper>
);

export default TodoHeader;
