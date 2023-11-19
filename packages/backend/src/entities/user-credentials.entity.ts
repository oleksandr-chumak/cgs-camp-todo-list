import { Column, Entity } from 'typeorm';
import { ExtendedBaseEntity } from './extended-base.entity';

@Entity('user_credentials')
export class UserCredentialsEntity extends ExtendedBaseEntity {
  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isVerified: boolean;
}
