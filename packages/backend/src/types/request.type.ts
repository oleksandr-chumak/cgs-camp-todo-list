import { Request } from 'express';
import { UserEntity } from '../entities';

export type RequestWithEntity<T> = Request & { entity: T };

export type RequestWithUser = Request & { user: UserEntity | null };

export type RequestWithUserAndEntity<Entity> = RequestWithUser & RequestWithEntity<Entity>;
