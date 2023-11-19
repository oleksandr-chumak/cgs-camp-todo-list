import { FindOptionsRelations, FindOptionsWhere } from 'typeorm';
import { UserEntity } from '../entities';
import { JWTTokens } from '../types/auth.type';
import { UserTokensEntity } from '../entities/user-tokens.entity';

export class UserTokensService {
  async saveTokens(userEntity: UserEntity, tokens: JWTTokens): Promise<UserTokensEntity> {
    return UserTokensEntity.save({ user: userEntity, ...tokens });
  }

  async findTokens(
    where: FindOptionsWhere<UserTokensEntity>,
    relations?: FindOptionsRelations<UserTokensEntity>
  ): Promise<UserTokensEntity | null> {
    return UserTokensEntity.findOne({ where, relations });
  }

  async findAllTokens(where: FindOptionsWhere<UserTokensEntity>): Promise<UserTokensEntity[]> {
    return UserTokensEntity.findBy(where);
  }

  async updateTokens(id: number, updateData: Partial<UserTokensEntity>) {
    return UserTokensEntity.update({ id }, updateData);
  }

  async removeTokens(userTokensEntities: UserTokensEntity[]): Promise<UserTokensEntity[]> {
    return UserTokensEntity.remove(userTokensEntities);
  }
}
