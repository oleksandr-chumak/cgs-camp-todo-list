import styled from 'styled-components';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { Container } from '../../../features/styled/layout.styled';
import { COLORS, DISPLAY } from '../../../../theme';
import { HeaderActiveProps } from '../../../features/layout.type';

export const UnauthorizedHeaderNav = styled('nav')`
  flex: 0 0 60px;

  @media (max-width: ${DISPLAY.MOBILE}px) {
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 5px;
  }
`;

export const HeaderContainer = styled(Container)<HeaderActiveProps>`
  display: flex;
  position: relative;
  align-items: center;
  gap: 10px;

  transition: all 0.3s ease 0s;

  @media (max-width: ${DISPLAY.MOBILE}px) {
    flex-direction: column;
    justify-content: center;
    gap: 40px;

    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    z-index: 3;
    background-color: ${COLORS.white};
    transform: ${({ $active }) => ($active ? 'translateX(0)' : 'translateX(100%)')};
  }
`;
export const HomeButtonContainer = styled('ul')`
  flex: 1 1 auto;
  display: flex;
  gap: 10px;
  justify-content: start;

  @media (max-width: ${DISPLAY.MOBILE}px) {
    flex: 0 0 auto;
  }
`;

export const BurgerMenuIcon = styled(RxHamburgerMenu)`
  display: none;

  font-size: 40px;

  @media (max-width: ${DISPLAY.MOBILE}px) {
    display: block;
  }
`;

export const CloseIcon = styled(IoClose)`
  display: none;
  position: absolute;
  top: 10px;
  right: 10px;

  font-size: 40px;

  @media (max-width: ${DISPLAY.MOBILE}px) {
    display: block;
  }
`;
