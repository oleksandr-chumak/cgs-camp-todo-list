import styled from 'styled-components';
import { COLORS, DISPLAY } from '../../../../theme';

export const TodoHeaderWrapper = styled('div')`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 65px;
  background-color: ${COLORS.black};
  padding: 10px 10px 10px 10px;

  @media (max-width: ${DISPLAY.TABLET}px) {
    height: 125px;
  }
`;

export const TodoNavigation = styled('ul')`
  flex: 0 0 50%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: ${DISPLAY.TABLET}px) {
    flex: 0 0 100%;
  }
`;

export const TodoNavigationElement = styled('li')`
  color: ${COLORS.white};
`;

export const TodoSearchField = styled('input')`
  width: calc(50% - 20px);
  background-color: ${COLORS.white};
  height: 40px;
  border-radius: 10px;
  padding-left: 20px;

  @media (max-width: ${DISPLAY.TABLET}px) {
    width: 100%;
  }
`;
