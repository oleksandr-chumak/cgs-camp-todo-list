import styled from 'styled-components';

import { COLORS, DISPLAY } from '../../../../theme';

export const TodoContainerWrapper = styled('div')`
  width: 100%;
  max-width: 1400px;
  margin: 0 20px 10px 20px;

  min-height: 600px;

  background-color: ${COLORS.primaryWhite};
  overflow: hidden;
  border-radius: 40px;

  @media (max-width: ${DISPLAY.TABLET_XS}px) {
    margin: 0;
  }

  @media (max-width: ${DISPLAY.MOBILE}px) {
    border-radius: 0;
  }
`;
