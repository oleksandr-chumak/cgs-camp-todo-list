import {
  DeserializedModelWithIdAndTimestamps,
  ModelWithIdAndTimestamps
} from '../../../common/types/services';
import type { TodoModel } from '../../models/todo.model';

export enum STATUS {
  IN_PROGRESS = 'inProgress',
  COMPLETED = 'completed'
}

export enum ACCESS {
  PUBLIC = 'public',
  PRIVATE = 'private'
}

export interface Todo {
  title: string;
  content: string;
  status: STATUS;
  access: ACCESS;
}

export type UpdateTodo = Partial<Todo> & { id: number };

export interface DeserializedGetTodos {
  todos: DeserializedTodoWithIdAndTimestamps[];
  totalCount: number;
}

export interface GetTodos {
  todos: Array<TodoModel>;
  totalCount: number;
}

export interface DeserializedTodo {
  title: string;
  content: string;
  status: STATUS;
  access: ACCESS;
}

export type DeserializedTodoWithIdAndTimestamps =
  DeserializedModelWithIdAndTimestamps<DeserializedTodo>;

export type TodoWithIdAndTimestamps = ModelWithIdAndTimestamps<Todo>;

export type TodoElementProps = TodoModel;

export interface TodoElementIndicatorsProps {
  status: STATUS;
  access: ACCESS;
}

export interface TodoListProps {
  todos: TodoModel[];
}

export interface TodoElementActionsProps {
  id: number;
  status: STATUS;
}
