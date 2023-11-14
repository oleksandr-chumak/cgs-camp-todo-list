import { DeepPartial, DeleteResult, UpdateResult } from 'typeorm';
import { TodoEntity } from '../entities';

export default class TodoService {
  async index(): Promise<TodoEntity[]> {
    return TodoEntity.find();
  }

  async store(data: DeepPartial<TodoEntity>): Promise<TodoEntity> {
    return TodoEntity.save(data);
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
