import styled from 'styled-components';
import { MdOutlineDelete } from 'react-icons/md';
import { FiEdit2 } from 'react-icons/fi';
import { COLORS, DISPLAY, FONT_COLORS } from '../../../../theme';
import { SIZES } from '../../../../theme/fonts.const';

export const TodoElementWrapper = styled('div')`
  flex: 0 1 400px;

  border: 1px solid ${FONT_COLORS.grey};
  border-radius: 20px;

  padding: 20px;

  background-color: ${COLORS.white};
  height: 220px;
  max-height: 220px;
  font-size: ${SIZES.m};

  @media (max-width: ${DISPLAY.TABLET}px) {
    max-width: 400px;
  }
`;

export const TodoElementTitle = styled('h4')`
  height: 15px;
  line-height: 15px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  max-width: 390px;
  width: 100%;

  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: underline;
  }
`;

export const TodoElementContent = styled('p')`
  display: inline-block;
  word-break: break-word;
  font-weight: 200;
  font-size: ${SIZES.s};
  text-wrap: normal;
  color: ${FONT_COLORS.grey};

  overflow: hidden;
  text-overflow: ellipsis;

  height: 55px;
  max-width: 390px;
  width: 100%;

  cursor: pointer;
`;

export const TodoElementIndicatorsWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 10px;

  margin: 5px 0;
  height: 55px;
`;

export const TodoElementIndicator = styled('div')`
  display: flex;
  align-items: center;
  gap: 10px;

  color: ${(props) => props.color};
`;

export const TodoElementIndicatorText = styled('p')`
  font-size: 10px;
  font-weight: 600;
`;

export const TodoElementPanel = styled('div')`
  display: flex;
`;

export const TodoElementDate = styled('p')`
  flex: 0 0 145px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${COLORS.black};
  font-weight: bold;

  border-radius: 20px;
  height: 30px;
  font-size: 14px;
  background-color: ${COLORS.grey};

  @media (max-width: ${DISPLAY.MOBILE_XS}px) {
    flex: 0 0 120px;
  }
`;

export const TodoElementActionsWrapper = styled('div')`
  flex: 1 1 auto;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 15px;

  @media (max-width: ${DISPLAY.MOBILE_XS}px) {
    gap: 5px;
  }
`;

export const EditIcon = styled(FiEdit2)`
  font-size: 25px;
  cursor: pointer;
  user-select: none;
`;

export const DeleteIcon = styled(MdOutlineDelete)`
  font-size: 25px;
  cursor: pointer;
  user-select: none;
`;
