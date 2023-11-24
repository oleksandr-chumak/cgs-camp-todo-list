import React, { FC } from 'react';
import * as Styled from './button-pagination.styled';
import { PaginationActionBackProps } from '../../types/props/pagination.type';

export const PaginationActionBack: FC<PaginationActionBackProps> = ({ currentPage, onClick }) => {
  const isFirstPage = currentPage === 1;
  const handleActionBack = () => {
    if (isFirstPage) {
      return;
    }
    onClick();
  };

  return (
    <Styled.PaginationActionWrapper $disabled={isFirstPage} onClick={handleActionBack}>
      <Styled.PaginationBackIcon />
    </Styled.PaginationActionWrapper>
  );
};
