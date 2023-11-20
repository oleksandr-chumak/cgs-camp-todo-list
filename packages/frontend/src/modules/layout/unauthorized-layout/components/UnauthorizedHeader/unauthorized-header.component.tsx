import React from 'react';
import * as Styled from './unauthorized-header.styled';
import { useModalContext } from '../../../../common/hooks/modal-context.hook';
import CreateTodoForm from '../../../../todo/components/forms/CreateTodoForm/create-todo-form.component';

const UnauthorizedHeader = () => {
  const { openModal } = useModalContext();

  const openCreateTodoModal = () => {
    openModal(<CreateTodoForm />);
  };

  return (
    <Styled.UnauthorizedHeaderNav>
      <Styled.HeaderContainer>
        <Styled.AddIcon onClick={openCreateTodoModal} />
      </Styled.HeaderContainer>
    </Styled.UnauthorizedHeaderNav>
  );
};

export default UnauthorizedHeader;
