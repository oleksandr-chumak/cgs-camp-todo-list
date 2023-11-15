/* eslint-disable */
import { FindOperator, In, Like } from 'typeorm';
import { CustomSanitizer } from 'express-validator/filter/sanitize';

export const toEqual: CustomSanitizer = (
  value: unknown
): FindOperator<string> | string | undefined => {
  if (Array.isArray(value)) {
    return In(value);
  }
  return typeof value === 'string' ? value : undefined;
};

export const toRegexp: CustomSanitizer = (value: unknown): FindOperator<string> | undefined =>
  typeof value === 'string' ? Like(`%${value}%`) : undefined;
