import styled from 'styled-components';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { Container } from '../../features/styled/layout.styled';

export const UnauthorizedHeaderNav = styled('nav')`
  flex: 0 0 60px;
`;

export const HeaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AddIcon = styled(IoMdAddCircleOutline)`
  font-size: 50px;

  cursor: pointer;
`;
