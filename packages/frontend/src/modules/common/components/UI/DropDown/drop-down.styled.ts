import styled from 'styled-components';
import { COLORS, HOVER_COLORS } from '../../../../theme';
import { DropDownListActiveProps } from '../../../types/props/UI/drop-down.type';

export const DropDownWrapper = styled('div')`
  position: relative;
`;

export const DropDownOpen = styled('button')`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  height: 38px;
  border-radius: 6px;
  width: 166px;
  cursor: pointer;
`;

export const DropDownList = styled('ul')<DropDownListActiveProps>`
  position: absolute;
  top: 40px;
  border-radius: 6px;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  visibility: ${({ $active }) => ($active ? 'visible' : 'hidden')};
  border: 1px solid ${COLORS.silver};
  background-color: ${COLORS.darkGrey};
  width: 166px;

  overflow: hidden;

  transition: all 0.3s ease 0s;
`;

export const DropDownItemWrapper = styled('li')`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 5px;
  color: ${COLORS.silver};
  cursor: pointer;
  height: 32px;

  &:hover {
    background-color: ${HOVER_COLORS.darkGrey};
  }
`;
