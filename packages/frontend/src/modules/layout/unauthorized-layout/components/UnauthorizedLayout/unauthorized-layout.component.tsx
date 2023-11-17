import React, { FC } from 'react';
import { Children } from '../../../../common/types/props';
import UnauthorizedHeader from '../UnauthorizedHeader/unauthorized-header.component';
import Main from '../../features/components/Main/main.component';
import Footer from '../../features/components/Footer/footer.component';
import * as LayoutStyled from '../../features/styled/layout.styled';

export const UnauthorizedLayout: FC<Children> = ({ children }) => (
  <LayoutStyled.LayoutWrapper>
    <UnauthorizedHeader />
    <Main>{children}</Main>
    <Footer />
  </LayoutStyled.LayoutWrapper>
);
