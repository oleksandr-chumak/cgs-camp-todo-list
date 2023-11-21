import React, { FC } from 'react';
import { Children } from '../../../../common/types/props';
import * as Styled from './main.styled';

const Main: FC<Children> = ({ children }) => (
  <Styled.MainWrapper>
    <Styled.MainContainer>{children}</Styled.MainContainer>
  </Styled.MainWrapper>
);

export default Main;
