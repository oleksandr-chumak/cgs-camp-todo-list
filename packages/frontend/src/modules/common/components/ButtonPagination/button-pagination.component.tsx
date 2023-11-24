/* eslint-disable */
import React, { FC } from 'react';
import * as Styled from './button-pagination.styled';
import { PaginationGapItem } from './pagination-item-gap.component';
import { ButtonPaginationProps } from '../../types/props/pagination.type';
import { PaginationItem } from './pagination-item.component';
import { PaginationActionBack } from './pagination-action-back.component';
import { PaginationActionForward } from './pagination-action-forward.component';
import { Pagination } from '../../utils/pagination';

export const ButtonPagination: FC<ButtonPaginationProps> = ({
  currentPage,
  totalCount,
  limit,
  onBackActionClick,
  onNextForwardClick,
  onItemClick
}) => {
  const totalPages = Math.ceil(totalCount / limit);
  const pagination: Pagination = new Pagination(currentPage, totalPages);

  const paginationItems: number[] = pagination.getPaginationItems();
  return (
    <Styled.PaginationWrapper>
      <PaginationActionBack onClick={onBackActionClick} currentPage={currentPage} />
      {paginationItems.map((page, index) =>
        page === 0 ? (
          <PaginationGapItem key={`pag-${index}`} />
        ) : (
          <PaginationItem
            page={page}
            key={`pag-${index}`}
            onClick={onItemClick}
            currentPage={currentPage}
          />
        )
      )}
      <PaginationActionForward
        currentPage={currentPage}
        totalCount={totalCount}
        limit={limit}
        onClick={onNextForwardClick}
      />
    </Styled.PaginationWrapper>
  );
};
