import { NextFunction, Request, Response } from 'express';
import { Repository } from 'typeorm';
import { BadRequestException, NotFoundException } from '../shared/exception';
import { ExtendedBaseEntity } from '../entities';

export function IsExistMiddleware<T extends typeof ExtendedBaseEntity>(
  baseEntity: T,
  message?: string
) {
  return async (req: Request, _: Response, next: NextFunction) => {
    try {
      const id: number | undefined = Number(req.params.id);

      if (Number.isNaN(id) || id < 0) {
        throw new BadRequestException('Invalid id');
      }

      const entityRepository: Repository<ExtendedBaseEntity> = baseEntity.getRepository();

      const entity: ExtendedBaseEntity | null = await entityRepository.findOne({
        where: { id }
      });

      if (entity === null) {
        throw new NotFoundException(message || `Entity with id ${id} not found`);
      }

      next();
    } catch (e) {
      next(e);
    }
  };
}
