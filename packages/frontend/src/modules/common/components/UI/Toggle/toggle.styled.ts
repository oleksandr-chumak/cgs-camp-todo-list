import styled from 'styled-components';
import { ToggleActiveProps } from '../../../types/props/UI/toggle.type';
import { COLORS } from '../../../../theme';

export const ToggleWrapper = styled('div')<ToggleActiveProps>`
  display: flex;
  position: relative;
  padding: 2px;
  width: 40px;
  cursor: pointer;
  height: 25px;
  background-color: ${(props) => (props.$active ? COLORS.green : COLORS.grey)};
  border-radius: 25px;
  user-select: none;
`;

export const ActiveIndicator = styled('div')<ToggleActiveProps>`
  width: 21px;
  height: 21px;
  position: absolute;
  left: calc(100% - 21px - 2px);
  border-radius: 50%;
  background-color: ${COLORS.white};
`;

export const Indicator = styled('div')`
  width: 21px;
  height: 21px;
  position: absolute;
  left: 2px;
  border-radius: 50%;
  background-color: ${COLORS.white};
`;
