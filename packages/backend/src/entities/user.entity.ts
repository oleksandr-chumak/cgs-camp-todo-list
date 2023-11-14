import { Column, Entity, JoinColumn, OneToMany, Relation } from 'typeorm';
import type { TodoEntity } from './todo.entity';
import { ExtendedBaseEntity } from './extended-base.entity';

@Entity('user')
export class UserEntity extends ExtendedBaseEntity {
  @Column()
  email: string;

  @OneToMany('todo', 'user', { cascade: true, nullable: true })
  @JoinColumn()
  todos: Relation<TodoEntity[]>;
}
