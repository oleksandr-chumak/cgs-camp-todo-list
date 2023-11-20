import styled from 'styled-components';

const FormSizes = styled('form')`
  width: 280px;
  min-height: 380px;
`;

export const EditFormLoaderWrapper = styled(FormSizes)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledEditForm = styled(FormSizes)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const EditFromActions = styled('div')`
  display: flex;
  width: 100%;
`;

export const TogglesWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: end;
  flex: 1 1 auto;
`;
