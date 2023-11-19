import { TransformSchema } from '../../../types/transform.type';
import { toEqual, toRegexp } from '../../../shared/transform/typeorm/to-value';

export const todoFilerSchema: TransformSchema = {
  title: toRegexp,
  content: toRegexp,
  status: toEqual,
  access: toEqual,
  userId: toEqual
};
