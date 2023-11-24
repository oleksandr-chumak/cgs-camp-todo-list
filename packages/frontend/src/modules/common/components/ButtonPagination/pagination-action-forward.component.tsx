import React, { FC } from 'react';
import { PaginationActionForwardProps } from '../../types/props/pagination.type';
import * as Styled from './button-pagination.styled';

export const PaginationActionForward: FC<PaginationActionForwardProps> = ({
  currentPage,
  totalCount,
  limit,
  onClick
}) => {
  const lastPage = Math.ceil(totalCount / limit);
  const isLastPage = currentPage === lastPage;

  const handleActionForward = () => {
    if (isLastPage) {
      return;
    }
    onClick();
  };

  return (
    <Styled.PaginationActionWrapper $disabled={isLastPage} onClick={handleActionForward}>
      <Styled.PaginationForwardIcon />
    </Styled.PaginationActionWrapper>
  );
};
