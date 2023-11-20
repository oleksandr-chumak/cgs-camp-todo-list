import React, { FC } from 'react';
import { TextAreaProps } from '../../../types/props/element-props.type';
import * as Styled from './field.styled';

export const TextArea: FC<TextAreaProps & { error?: string }> = ({
  placeholder,
  error,
  ...props
}) => {
  const id: string = String(Math.random());
  return (
    <Styled.InputWrapper>
      <Styled.StyledLabel htmlFor={id}>{placeholder}</Styled.StyledLabel>
      <Styled.StyledTextArea {...props} ref={undefined} />
      {error ? <Styled.ErrorMessage>{error}</Styled.ErrorMessage> : null}
    </Styled.InputWrapper>
  );
};
