import styled from 'styled-components';
import { GiConfirmed } from 'react-icons/gi';
import { COLORS, DISPLAY } from '../../../../theme';

export const ConfirmationContentWrapper = styled('div')`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${DISPLAY.MOBILE}px) {
    width: 100vw;
    height: calc(100vh - 60px);
  }
`;

export const ConfirmationContentHeaderWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ConfirmIcon = styled(GiConfirmed)`
  color: ${COLORS.green};
  font-size: 40px;
  @media (max-width: ${DISPLAY.MOBILE}px) {
    font-size: 32px;
  }
`;

export const ConfirmationContentHeader = styled('h1')`
  color: ${COLORS.green};
  font-size: 32px;

  @media (max-width: ${DISPLAY.MOBILE}px) {
    font-size: 28px;
  }
`;
