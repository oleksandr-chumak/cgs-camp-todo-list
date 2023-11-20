import React, { FC } from 'react';
import * as Styled from './field.styled';
import { InputProps } from '../../../types/props/element-props.type';

export const Input: FC<InputProps & { error?: string }> = ({ placeholder, error, ...props }) => {
  const id: string = String(Math.random());
  return (
    <Styled.InputWrapper>
      <Styled.StyledLabel htmlFor={id}>{placeholder}</Styled.StyledLabel>
      <Styled.StyledInput {...props} ref={undefined} />
      {error ? <Styled.ErrorMessage>{error}</Styled.ErrorMessage> : null}
    </Styled.InputWrapper>
  );
};
