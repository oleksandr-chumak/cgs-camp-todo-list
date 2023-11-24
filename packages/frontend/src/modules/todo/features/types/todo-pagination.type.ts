import { TodoModel } from '../../models/todo.model';

export interface TableTodoPagination {
  currentPage: number;
  todos: TodoModel[];
  totalCount: number;
}
