import styled from 'styled-components';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { Container } from '../../../features/styled/layout.styled';
import { DISPLAY } from '../../../../theme';

export const AuthorizedHeaderNav = styled('nav')`
  flex: 0 0 60px;
`;

export const HeaderContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const AddIcon = styled(IoMdAddCircleOutline)`
  position: absolute;
  left: 50%;
  right: 50%;
  transform: translate(-50%);
  font-size: 50px;

  cursor: pointer;

  @media (max-width: ${DISPLAY.MOBILE}px) {
    display: none;
  }
`;
