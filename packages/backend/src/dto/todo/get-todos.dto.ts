import { FindOperator } from 'typeorm';
import { Access, Status } from '../../types/todos.type';

export class GetTodosDto {
  readonly skip: number;

  readonly limit: number;

  readonly title?: string | FindOperator<string>;

  readonly content?: string | FindOperator<string>;

  readonly status?: Status | FindOperator<Status>;

  readonly access?: Access | FindOperator<Access>;

  readonly userId: number;
}
