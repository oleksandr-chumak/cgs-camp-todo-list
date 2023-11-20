import { FindOptionsWhere, Repository } from 'typeorm';
import { ExtendedBaseEntity } from '../entities';
import { createNestedObject } from './create-nested-object';
import { FindEntityByParams } from '../types/middleware.type';

export async function findEntityByParams<T extends typeof ExtendedBaseEntity>(
  options: FindEntityByParams<T>
) {
  const { req, baseEntity, relations, where, dbFields, reqField } = options;
  const searchValue: unknown = req[where][reqField];

  const entityRepository: Repository<T> = baseEntity.getRepository() as unknown as Repository<T>;

  const whereOptions: FindOptionsWhere<T> = createNestedObject(
    [...dbFields],
    searchValue
  ) as FindOptionsWhere<T>;

  const entity: T | null = await entityRepository.findOne({
    where: whereOptions,
    relations
  });

  return entity;
}
