import styled from 'styled-components';
import { COLORS, DISPLAY } from '../../../../theme';
import image from '../../../../../assets/point.svg';

const TodoContainer = styled('div')`
  width: calc(100% - 20px);

  height: 100%;
  min-height: 500px;
`;

export const TodoMainContainerLoadingWrapper = styled(TodoContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: calc(100% - 20px);
  width: 100vw;
`;

export const TodoMainContainerWrapper = styled(TodoContainer)`
  display: grid;
  position: relative;
  gap: 20px;

  overflow: hidden;

  background-image: url(${image});
  background-repeat: repeat;
  background-size: 25px;

  margin: 10px;
  padding: 30px 20px;
  border: 1px dashed ${COLORS.black};
  border-radius: 20px;

  @media (max-width: ${DISPLAY.TABLET_XL}px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${DISPLAY.TABLET_XL}px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${DISPLAY.TABLET}px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
