import React from 'react';
import * as Styled from './todo-header.styled';
import { useSearchTodoByTitle } from '../../hooks/search-todos-by-title.hook';
import { useTodoNavigationName } from '../../hooks/todo-navigation-name.hook';
import { TodoNavigationName } from '../../types/todo-header.type';
import TodoNavigationElement from './todo-navigation-element';
import { useUser } from '../../../../auth/features/hooks/user.hook';

const TodoHeader = () => {
  const user = useUser();
  const { title, handleTitleChange } = useSearchTodoByTitle();

  const navigationName: TodoNavigationName | null = useTodoNavigationName();

  return (
    <Styled.TodoHeaderWrapper>
      {navigationName && (
        <Styled.TodoNavigation>
          <TodoNavigationElement
            text="All"
            name={TodoNavigationName.ALL}
            currentName={navigationName}
          />
          {user ? (
            <TodoNavigationElement
              text="Private"
              name={TodoNavigationName.PRIVATE}
              currentName={navigationName}
            />
          ) : null}
          <TodoNavigationElement
            text="Public"
            name={TodoNavigationName.PUBLIC}
            currentName={navigationName}
          />
          <TodoNavigationElement
            text="Completed"
            name={TodoNavigationName.COMPLETED}
            currentName={navigationName}
          />
        </Styled.TodoNavigation>
      )}
      <Styled.TodoSearchField value={title} onChange={handleTitleChange} placeholder="Search" />
    </Styled.TodoHeaderWrapper>
  );
};

export default TodoHeader;
