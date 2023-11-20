import styled from 'styled-components';
import { FONT_COLORS } from '../../../../theme';

const TodoWrapperBase = styled('div')`
  display: flex;
  flex-direction: column;

  width: 300px;
  max-height: 500px;
`;

export const TodoShowModalLoadingWrapper = styled(TodoWrapperBase)`
  align-items: center;
  justify-content: center;
  height: 300px;
`;

export const TodoShowModalWrapper = styled(TodoWrapperBase)``;

export const TodoShowModalHeader = styled('h3')`
  height: 30px;
  width: 100%;
`;

export const TodoShowModalContent = styled('p')`
  display: inline-block;
  width: 100%;
  max-height: 350px;

  color: ${FONT_COLORS.grey};
  font-size: 14px;

  word-break: break-word;
  overflow: scroll;
  scrollbar-width: thin;
  text-overflow: ellipsis;
`;
