import React, { useState } from 'react';
import * as Styled from './unauthorized-header.styled';
import { ROUTER_KEYS } from '../../../../common/consts/app-keys.const';
import { LinkButton } from '../../../../common/components/UI/Button/button.styled';

const UnauthorizedHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Styled.UnauthorizedHeaderNav>
      <Styled.BurgerMenuIcon onClick={handleClick} />
      <Styled.HeaderContainer $active={isOpen}>
        <Styled.CloseIcon onClick={handleClick} />
        <Styled.HomeButtonContainer>
          <LinkButton to={ROUTER_KEYS.ROOT}>Todo</LinkButton>
        </Styled.HomeButtonContainer>
        <LinkButton to={ROUTER_KEYS.LOGIN}>Login</LinkButton>
        <LinkButton to={ROUTER_KEYS.REGISTRATION}>Registration</LinkButton>
      </Styled.HeaderContainer>
    </Styled.UnauthorizedHeaderNav>
  );
};

export default UnauthorizedHeader;
