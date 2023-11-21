import styled from 'styled-components';
import { IoIosClose } from 'react-icons/io';
import { DISPLAY, SHADOW_COLOR } from '../../../theme';

export const ModalWindow = styled('div')`
  position: fixed !important;
  border: none;
  border-radius: 15px !important;
  padding: 20px;
  box-shadow: 0 4px 8px ${SHADOW_COLOR.black};
  max-width: 600px;
  width: fit-content;
  height: fit-content;
  min-width: 320px;
  top: 50% !important;
  left: 50% !important;

  transform: translate(-50%, -50%);

  @media (max-width: ${DISPLAY.MOBILE}px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    border: 0 !important;
    border-radius: 0 !important;

    width: 100vw;
    height: 100vh;
  }
`;

export const Overlay = styled('div')``;

export const CloseIcon = styled(IoIosClose)`
  position: absolute;
  top: 0;
  right: 0;

  cursor: pointer;
  font-size: 50px;
`;
