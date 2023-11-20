import React, { FC } from 'react';
import { Children } from '../../../../common/types/props';
import * as Styled from './todo-main-container.styled';

const TodoMainContainer: FC<Children> = ({ children }) => (
  <Styled.TodoMainContainerWrapper>{children}</Styled.TodoMainContainerWrapper>
);

export default TodoMainContainer;
