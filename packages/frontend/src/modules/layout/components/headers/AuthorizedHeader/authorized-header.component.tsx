import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useModalContext } from '../../../../common/hooks/modal-context.hook';
import CreateTodoForm from '../../../../todo/components/forms/CreateTodoForm/create-todo-form.component';
import * as Styled from './authorized-header.styled';
import DropDown from '../../../../common/components/UI/DropDown/drop-down.component';
import { DropDownItemProps } from '../../../../common/types/props/UI/drop-down.type';
import ResetPasswordLocalForm from '../../../../auth/components/forms/reset-password-local-form.component';
import { useLogout } from '../../../../auth/features/hooks/query/logout.hook';
import { DISPLAY } from '../../../../theme';

const AuthorizedHeader = () => {
  const { logout } = useLogout();
  const isMobile: boolean = useMediaQuery({ query: `(max-width: ${DISPLAY.MOBILE}px)` });
  const { openModal } = useModalContext();

  const openCreateTodoModal = () => {
    openModal(<CreateTodoForm />);
  };

  const openResetPasswordModal = () => {
    openModal(<ResetPasswordLocalForm />);
  };

  const dropDownItems: DropDownItemProps[] = isMobile
    ? [
        { onClick: openCreateTodoModal, text: 'Create todo' },
        { onClick: openResetPasswordModal, text: 'Change password' },
        { onClick: logout, text: 'Logout' }
      ]
    : [
        { onClick: openResetPasswordModal, text: 'Change password' },
        { onClick: logout, text: 'Logout' }
      ];

  return (
    <Styled.AuthorizedHeaderNav>
      <Styled.HeaderContainer>
        <Styled.AddIcon onClick={openCreateTodoModal} />
        <DropDown items={dropDownItems} title="Profile" />
      </Styled.HeaderContainer>
    </Styled.AuthorizedHeaderNav>
  );
};

export default AuthorizedHeader;
