import styled from 'styled-components';
import { DISPLAY } from '../../../theme';

export const LayoutWrapper = styled('div')`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
  height: 100%;
`;

export const Container = styled('div')`
  margin: 0 auto;
  width: 100%;
  max-width: ${DISPLAY.DESKTOP}px;
  padding: 0 20px;

  height: 100%;
  flex-grow: 1;
  flex-basis: auto;
`;
