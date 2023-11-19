import { FindOptionsRelations, FindOptionsWhere } from 'typeorm';
import { UserEntity } from '../entities';
import { CreateUserDto } from '../dto/user/create-user.dto';
import { UserCredentialsEntity } from '../entities/user-credentials.entity';

export class UserService {
  async store(createData: CreateUserDto): Promise<UserEntity> {
    return UserEntity.save({ credentials: createData });
  }

  async show(
    where: FindOptionsWhere<UserEntity>,
    relations?: FindOptionsRelations<UserEntity>
  ): Promise<UserEntity | null> {
    return UserEntity.findOne({ where, relations });
  }

  async update(userEntity: UserEntity, updateData: Partial<UserCredentialsEntity>) {
    const { credentials } = userEntity;
    return UserCredentialsEntity.update({ id: credentials.id }, updateData);
  }
}
