import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { HiDotsHorizontal } from 'react-icons/hi';
import { BORDER_COLOR, COLORS, DISPLAY, HOVER_COLORS } from '../../../theme';

export const PaginationWrapper = styled.div`
  display: flex;
  gap: 5px;

  max-width: calc(calc(32px * 9) + calc(5px * 8));
  height: 32px;

  @media (max-width: ${DISPLAY.MOBILE_XS}px) {
    max-width: calc(calc(28px * 9) + calc(5px * 8));
    height: 32px;
  }
`;

const BaseItemWrapper = styled('button')`
  display: flex;
  justify-content: center;
  background-color: transparent;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: ${DISPLAY.MOBILE_XS}px) {
    width: 28px;
    height: 28px;
  }
`;

export const PaginationItemWrapper = styled(BaseItemWrapper)<{ $active: boolean }>`
  color: ${COLORS.black};

  border: 1px solid ${({ $active }) => ($active ? BORDER_COLOR.blue : COLORS.silver)};
  background-color: ${({ $active }) => ($active ? COLORS.blue : 'transparent')};

  transition: all 0.3s ease 0s;

  &:hover {
    background-color: ${({ $active }) => ($active ? HOVER_COLORS.blue : COLORS.grey)};
  }
`;

export const PaginationActionWrapper = styled(BaseItemWrapper)<{ $disabled: boolean }>`
  border: 1px solid ${({ $disabled }) => ($disabled ? COLORS.grey : COLORS.silver)};
  color: ${({ $disabled }) => ($disabled ? COLORS.grey : COLORS.black)};

  &:hover {
    background-color: ${({ $disabled }) => ($disabled ? 'transparent' : COLORS.grey)};
  }
`;

export const PaginationItemGapWrapper = styled(BaseItemWrapper)`
  cursor: auto;
`;

export const PaginationBackIcon = styled(IoIosArrowBack)`
  font-size: 22px;
`;
export const PaginationForwardIcon = styled(IoIosArrowForward)`
  font-size: 22px;
`;

export const PaginationGapIcon = styled(HiDotsHorizontal)``;
