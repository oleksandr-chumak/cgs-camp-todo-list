import { Access, Status } from '../../types/todos.type';

export class UpdateTodoDto {
  readonly title?: string;

  readonly content?: string;

  readonly status?: Status;

  readonly access?: Access;
}
