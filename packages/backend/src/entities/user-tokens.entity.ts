import { Column, Entity, ManyToOne, Relation } from 'typeorm';
import type { UserEntity } from './user.entity';
import { ExtendedBaseEntity } from './extended-base.entity';

@Entity('user_tokens')
export class UserTokensEntity extends ExtendedBaseEntity {
  @Column()
  accessToken: string;

  @Column()
  refreshToken: string;

  @ManyToOne('user', 'tokens')
  user: Relation<UserEntity>;
}
