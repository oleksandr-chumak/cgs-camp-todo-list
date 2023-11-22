import { FC, lazy } from 'react';
import { DisplayName } from '../../../common/types/media/display.type';
import { TodoListProps } from '../types/todos.type';

const DesktopTodoList = lazy(
  () => import('../../components/todo-lists/DesktopTodoList/desktop-todo-list.component')
);
const TabletTodoList = lazy(
  () => import('../../components/todo-lists/TabletTodoList/tablet-todo-list.component')
);
const MobileTodoList = lazy(
  () => import('../../components/todo-lists/MobileTodoList/mobile-todo-list.component')
);

export const TODO_LIST: Record<DisplayName, FC<TodoListProps>> = {
  [DisplayName.DESKTOP]: DesktopTodoList,
  [DisplayName.TABLET]: TabletTodoList,
  [DisplayName.MOBILE]: MobileTodoList
};
