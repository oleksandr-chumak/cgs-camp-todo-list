import React, { FC } from 'react';
import { TodoElementProps } from '../../types/todos.type';
import * as Styled from './todo-element.styled';
import TodoElementIndicators from './todo-element-indicators.component';
import TodoElementActions from './todo-element-actions.component';
import { useModalContext } from '../../../../common/hooks/modal-context.hook';
import TodoShowModal from '../TodoShowModal/todo-show-modal.component';

const TodoElement: FC<TodoElementProps> = (props) => {
  const { id, title, content, access, status, formattedDate } = props;
  const { openModal } = useModalContext();

  const openTodo = () => {
    openModal(<TodoShowModal id={id} />);
  };

  return (
    <Styled.TodoElementWrapper>
      <Styled.TodoElementTitle onClick={openTodo}>{title}</Styled.TodoElementTitle>
      <Styled.TodoElementContent onClick={openTodo}>{content}</Styled.TodoElementContent>
      <TodoElementIndicators access={access} status={status} />
      <Styled.TodoElementPanel>
        <Styled.TodoElementDate>{formattedDate}</Styled.TodoElementDate>
        <TodoElementActions id={id} status={status} />
      </Styled.TodoElementPanel>
    </Styled.TodoElementWrapper>
  );
};

export default TodoElement;
