import { ACCESS, STATUS } from './todos.type';

export interface ICreateTodo {
  title: string;
  content: string;
}

export interface TodosFilterQuery {
  status?: STATUS;
  access?: ACCESS;
  title?: string;
}
