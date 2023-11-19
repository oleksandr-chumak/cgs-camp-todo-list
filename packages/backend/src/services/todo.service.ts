import { DeepPartial, DeleteResult, UpdateResult } from 'typeorm';
import { TodoEntity, UserEntity } from '../entities';
import { GetTodosDto } from '../dto/todo/get-todos.dto';
import { TodosAndTotalCount } from '../types/todos.type';

export default class TodoService {
  async index(data: GetTodosDto): Promise<TodosAndTotalCount> {
    const { skip, limit, ...filter } = data;
    const { userId, ...filterWithoutUserData } = filter;
    const [todos, totalCount] = await TodoEntity.findAndCount({
      where: {
        ...filterWithoutUserData,
        user: { id: userId }
      },
      skip,
      take: limit
    });
    return { todos, totalCount };
  }

  async store(userEntity: UserEntity, data: Partial<TodoEntity>): Promise<TodoEntity> {
    return TodoEntity.save<TodoEntity>({ user: userEntity, ...data });
  }

  async show(id: number): Promise<TodoEntity | null> {
    return TodoEntity.findOne({ where: { id } });
  }

  async update(criteria: number, data: DeepPartial<TodoEntity>): Promise<UpdateResult> {
    return TodoEntity.update(criteria, data);
  }

  async destroy(id: number): Promise<DeleteResult> {
    return TodoEntity.delete({ id });
  }
}
