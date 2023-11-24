import React, { FC } from 'react';
import { ButtonPagination } from '../../../../common/components/ButtonPagination/button-pagination.component';
import { useSearchQueryNavigation } from '../../../../common/hooks/search-query-navigation.hook';
import { TodoPaginationProps } from '../../types/todos.type';
import { TODOS_LIMIT } from '../../../../common/consts/app-keys.const';
import * as Styled from './todo-pagination.styled';

const TodoPagination: FC<TodoPaginationProps> = ({ totalCount, currentPage }) => {
  const { navigate } = useSearchQueryNavigation();

  if (!totalCount || !currentPage) {
    return <Styled.TodoPaginationWrapper />;
  }

  const handleItemClick = (page: number) => {
    navigate({ page: `${page}` });
  };

  const handleForwardClick = () => {
    navigate({ page: `${currentPage + 1}` });
  };

  const handleBackClick = () => {
    navigate({ page: `${currentPage - 1}` });
  };

  return (
    <Styled.TodoPaginationWrapper>
      <ButtonPagination
        currentPage={currentPage}
        totalCount={totalCount}
        limit={TODOS_LIMIT}
        onItemClick={handleItemClick}
        onNextForwardClick={handleForwardClick}
        onBackActionClick={handleBackClick}
      />
    </Styled.TodoPaginationWrapper>
  );
};

export default TodoPagination;
