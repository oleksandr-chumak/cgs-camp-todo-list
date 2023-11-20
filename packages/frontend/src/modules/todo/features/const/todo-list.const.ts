import { FC } from 'react';
import { DisplayName } from '../../../common/types/media/display.type';
import { TodoListProps } from '../types/todos.type';
import DesktopTodoList from '../../components/todo-lists/DesktopTodoList/desktop-todo-list.component';
import TabletTodoList from '../../components/todo-lists/TabletTodoList/tablet-todo-list.component';
import MobileTodoList from '../../components/todo-lists/MobileTodoList/mobile-todo-list.component';

export const TODO_LIST: Record<DisplayName, FC<TodoListProps>> = {
  [DisplayName.DESKTOP]: DesktopTodoList,
  [DisplayName.TABLET]: TabletTodoList,
  [DisplayName.MOBILE]: MobileTodoList
};
