import styled from 'styled-components';
import { Container } from '../../styled/layout.styled';
import { DISPLAY } from '../../../../theme';

export const MainWrapper = styled('main')`
  flex-grow: 1;
  flex-basis: auto;

  display: flex;
  flex-direction: column;
`;

export const MainContainer = styled(Container)`
  display: flex;
  padding: 0;
  justify-content: center;
  align-items: center;

  @media (max-width: ${DISPLAY.MOBILE}px) {
    align-items: start;
  }
`;
