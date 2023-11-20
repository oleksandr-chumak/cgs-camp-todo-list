import { Entity, JoinColumn, OneToMany, OneToOne, Relation } from 'typeorm';
import type { TodoEntity } from './todo.entity';
import { ExtendedBaseEntity } from './extended-base.entity';
import { UserCredentialsEntity } from './user-credentials.entity';
import { UserTokensEntity } from './user-tokens.entity';

@Entity('user')
export class UserEntity extends ExtendedBaseEntity {
  @OneToMany('todo', 'user', { cascade: true, nullable: true })
  @JoinColumn()
  todos: Relation<TodoEntity[]>;

  @OneToOne(() => UserCredentialsEntity, { cascade: ['insert'], nullable: false })
  @JoinColumn()
  credentials: Relation<UserCredentialsEntity>;

  @OneToMany('user_tokens', 'user', { cascade: true, nullable: true })
  tokens: Relation<UserTokensEntity[]>;
}
