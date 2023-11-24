import styled from 'styled-components';
import { FcCancel } from 'react-icons/fc';
import { COLORS, DISPLAY } from '../../../../theme';
import image from '../../../../../assets/point.svg';

export const TodoMainContainerLoadingWrapper = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-column: span 3;
`;

export const TodoNotFoundWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TodoNotFoundHeader = styled('h2')`
  font-size: 36px;
  color: ${COLORS.black};
`;

export const TodoNotFoundIcon = styled(FcCancel)`
  font-size: 50px;
`;

const mobileHeight: number = 220 * 6 + 10 * 5 + 30 * 2;
const tabletHeight: number = 220 * 2 + 10 * 1 + 30 * 2;
const tabletXlHeight: number = 220 * 3 + 20 * 2 + 30 * 2;

export const TodoMainContainerWrapper = styled('div')`
  display: grid;
  position: relative;
  gap: 20px;

  width: calc(100% - 20px);
  height: 100%;
  min-height: 530px;

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
    height: ${tabletXlHeight}px;
  }

  @media (min-width: ${DISPLAY.TABLET_XL}px) {
    grid-template-columns: repeat(3, 1fr);
    height: ${tabletHeight}px;
  }

  @media (max-width: ${DISPLAY.TABLET}px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media (max-width: ${DISPLAY.MOBILE}px) {
    height: ${mobileHeight}px;
  }
`;
