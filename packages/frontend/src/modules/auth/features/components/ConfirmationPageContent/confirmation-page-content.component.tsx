import React from 'react';
import { LinkButton } from '../../../../common/components/UI/Button/button.styled';
import { ROUTER_KEYS } from '../../../../common/consts/app-keys.const';
import * as Styled from './confirmation-page-content.styled';

const ConfirmationPageContent = () => (
  <Styled.ConfirmationContentWrapper>
    <Styled.ConfirmationContentHeaderWrapper>
      <Styled.ConfirmIcon />
      <Styled.ConfirmationContentHeader>Account confirmed</Styled.ConfirmationContentHeader>
    </Styled.ConfirmationContentHeaderWrapper>
    <LinkButton to={ROUTER_KEYS.LOGIN}>Login to account</LinkButton>
  </Styled.ConfirmationContentWrapper>
);

export default ConfirmationPageContent;
