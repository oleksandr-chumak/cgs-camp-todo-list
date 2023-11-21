import React, { FC } from 'react';
import { Children } from '../../../../common/types/props';
import UnauthorizedHeader from '../../../components/headers/UnauthorizedHeader/unauthorized-header.component';
import Main from '../Main/main.component';
import Footer from '../Footer/footer.component';
import * as LayoutStyled from '../../styled/layout.styled';
import { useUser } from '../../../../auth/features/hooks/user.hook';
import AuthorizedHeader from '../../../components/headers/AuthorizedHeader/authorized-header.component';
import { UserModel } from '../../../../auth/models/user.model';

export const UnauthorizedLayout: FC<Children> = ({ children }) => {
  const user: UserModel | undefined = useUser();
  return (
    <LayoutStyled.LayoutWrapper>
      {user ? <AuthorizedHeader /> : <UnauthorizedHeader />}
      <Main>{children}</Main>
      <Footer />
    </LayoutStyled.LayoutWrapper>
  );
};
