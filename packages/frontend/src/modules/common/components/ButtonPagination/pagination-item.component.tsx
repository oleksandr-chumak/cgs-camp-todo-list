import React, { FC } from 'react';
import { PaginationItemProps } from '../../types/props/pagination.type';
import * as Styled from './button-pagination.styled';

export const PaginationItem: FC<PaginationItemProps> = ({ onClick, page, currentPage }) => {
  const isActive = currentPage === page;
  const handleItemClick = () => {
    if (isActive) {
      return;
    }

    onClick(page);
  };

  return (
    <Styled.PaginationItemWrapper $active={isActive} onClick={handleItemClick}>
      {page}
    </Styled.PaginationItemWrapper>
  );
};
