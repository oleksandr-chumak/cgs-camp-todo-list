import React, { FC } from 'react';
import { TextAreaProps } from '../../../types/props/element-props.type';
import * as Styled from './field.styled';
import { PropsWithError } from '../../../types/props/UI/input.type';

export const TextArea: FC<PropsWithError<TextAreaProps>> = ({ placeholder, error, ...props }) => {
  const id: string = String(Math.random());
  return (
    <Styled.InputWrapper>
      <Styled.StyledLabel htmlFor={id}>{placeholder}</Styled.StyledLabel>
      <Styled.StyledTextArea {...props} ref={undefined} />
      {error ? <Styled.ErrorMessage>{error}</Styled.ErrorMessage> : null}
    </Styled.InputWrapper>
  );
};
