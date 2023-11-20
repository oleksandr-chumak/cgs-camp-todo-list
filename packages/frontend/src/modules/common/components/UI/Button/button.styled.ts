import styled from 'styled-components';
import { COLORS } from '../../../../theme';

export const Button = styled('button')`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  width: 100%;
  height: 40px;
  cursor: pointer;
  border-radius: 20px;
`;
