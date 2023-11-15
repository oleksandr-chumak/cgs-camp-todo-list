import type { TodoEntity } from '../entities';

export enum Status {
  'inProgress' = 'inProgress',
  'Completed' = 'completed'
}

export enum Access {
  'Public' = 'public',
  'Private' = 'private'
}

export interface TodosAndTotalCount {
  todos: TodoEntity[];
  totalCount: number;
}
