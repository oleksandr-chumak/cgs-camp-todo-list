import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS } from '../../../../theme';

export const Button = styled('button')`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  width: 100%;
  height: 40px;
  cursor: pointer;
  border-radius: 20px;
`;

export const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  height: 40px;
  padding: 20px;
  width: fit-content;
  cursor: pointer;
  border-radius: 20px;
`;
