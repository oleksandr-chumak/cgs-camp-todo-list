import styled from 'styled-components';

import { COLORS } from '../../../../theme';

export const TodoContainerWrapper = styled('div')`
  width: 100%;
  max-width: 1400px;

  min-height: 600px;

  background-color: ${COLORS.primaryWhite};
  overflow: hidden;
  border-radius: 40px;
`;
