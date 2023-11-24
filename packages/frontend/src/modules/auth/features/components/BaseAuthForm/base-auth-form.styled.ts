import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { COLORS, DISPLAY } from '../../../../theme';

export const ModalForm = styled('form')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  max-width: 370px;
  min-width: 320px;
`;

export const BaseForm = styled(ModalForm)`
  padding: 40px 20px;

  border-radius: 20px;
  border: 1px solid ${COLORS.black};

  @media (max-width: ${DISPLAY.MOBILE}px) {
    justify-content: center;
    border: 0;
    width: 100vw;
    height: calc(100vh - 60px);
  }
`;

export const BaseFormHeader = styled('h2')`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const BaseFormRedirect = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  width: 100%;
  text-align: center;
  color: ${COLORS.primary};
`;
