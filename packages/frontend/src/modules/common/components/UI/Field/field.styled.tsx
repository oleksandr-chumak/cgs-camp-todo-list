import styled from 'styled-components';
import { COLORS } from '../../../../theme';

export const InputWrapper = styled('div')`
  width: 100%;
`;

export const StyledInput = styled('input')`
  border: 1px solid ${COLORS.grey};
  padding-left: 10px;
  width: 100%;
  height: 36px;
  border-radius: 10px;
`;

export const StyledTextArea = styled('textarea')`
  border: 1px solid ${COLORS.grey};
  padding-left: 10px;
  width: 100%;
  height: 90px;
  border-radius: 10px;
`;

export const StyledLabel = styled('label')`
  margin-bottom: 5px;
`;

export const ErrorMessage = styled('p')`
  margin-top: 5px;
  font-size: 10px;
  color: ${COLORS.red};
`;
