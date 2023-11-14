import { Column, Entity, ManyToOne, Relation } from 'typeorm';
import type { UserEntity } from './user.entity';
import { ExtendedBaseEntity } from './extended-base.entity';
import { Access, Status } from '../types/todos.type';

@Entity('todo')
export class TodoEntity extends ExtendedBaseEntity {
  @Column()
  title: string;

  @Column()
  content: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.inProgress
  })
  status: Status;

  @Column({
    type: 'enum',
    enum: Access,
    default: Access.Private
  })
  access: Access;

  @ManyToOne('user', 'todos')
  user: Relation<UserEntity>;
}
