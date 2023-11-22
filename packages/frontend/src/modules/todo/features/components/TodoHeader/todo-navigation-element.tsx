import React, { FC } from 'react';
import { TodoNavigationName, TodoNavigationProps } from '../../types/todo-header.type';
import * as Styled from './todo-header.styled';
import { SearchQueryNavigationOptions } from '../../../../common/types/query.type';
import {
  TODO_NAVIGATION_EXCLUDE_SEARCH_QUERY,
  TODO_NAVIGATION_QUERY_NAME,
  TODO_NAVIGATION_QUERY_VALUE
} from '../../const/todo-navigation.const';
import { useSearchQueryNavigation } from '../../../../common/hooks/search-query-navigation.hook';

const TodoNavigationElement: FC<TodoNavigationProps> = ({ name, currentName, text }) => {
  const { navigate } = useSearchQueryNavigation();
  const query =
    name !== TodoNavigationName.ALL
      ? { [TODO_NAVIGATION_QUERY_NAME[name]]: TODO_NAVIGATION_QUERY_VALUE[name] }
      : {};

  const options: SearchQueryNavigationOptions = {
    excludeSearchQuery: TODO_NAVIGATION_EXCLUDE_SEARCH_QUERY[name]
  };

  return (
    <Styled.TodoNavigationElement
      onClick={() => navigate(query, options)}
      $active={name === currentName}
    >
      {text}
    </Styled.TodoNavigationElement>
  );
};

export default TodoNavigationElement;
