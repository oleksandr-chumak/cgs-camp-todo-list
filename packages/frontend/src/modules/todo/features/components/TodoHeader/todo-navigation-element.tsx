import React, { FC } from 'react';
import { useQueryClient } from 'react-query';
import { TodoNavigationProps } from '../../types/todo-header.type';
import * as Styled from './todo-header.styled';
import { SearchQueryNavigationOptions } from '../../../../common/types/query.type';
import {
  TODO_NAVIGATION_EXCLUDE_SEARCH_QUERY,
  TODO_NAVIGATION_QUERY
} from '../../const/todo-navigation.const';
import { useSearchQueryNavigation } from '../../../../common/hooks/search-query-navigation.hook';
import { QUERY_KEYS } from '../../../../common/consts/app-keys.const';

const TodoNavigationElement: FC<TodoNavigationProps> = ({ name, currentName, text }) => {
  const { navigate } = useSearchQueryNavigation();
  const queryClient = useQueryClient();
  const query = TODO_NAVIGATION_QUERY[name];

  const options: SearchQueryNavigationOptions = {
    excludeSearchQuery: TODO_NAVIGATION_EXCLUDE_SEARCH_QUERY[name]
  };

  const handleChange = async () => {
    await navigate(query, options);
    queryClient.refetchQueries(QUERY_KEYS.TODOS);
  };

  return (
    <Styled.TodoNavigationElement onClick={handleChange} $active={name === currentName}>
      {text}
    </Styled.TodoNavigationElement>
  );
};

export default TodoNavigationElement;
