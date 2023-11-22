import { useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnyObject, Maybe, ObjectSchema, ValidationError } from 'yup';
import { ROUTER_KEYS } from '../../../common/consts/app-keys.const';
import { useSearchQuery } from '../../../common/hooks/search-query.hook';
import { generateSearchQuery } from '../../../common/utils/generate-search-query';
import { removeKeysFromObject } from '../../../common/utils/remove-keys-from-object';

export * as Yup from 'yup';

export const useFiltrationQuery = <T extends Maybe<AnyObject>>(
  schema: ObjectSchema<T>,
  customValidators?: Partial<Record<keyof T, (value: T[keyof T]) => boolean>>
) => {
  const [query, setQuery] = useState<T | null>(null);
  const { parseQuery } = useSearchQuery();
  const location = useLocation();
  const history = useHistory();

  const validateQueryWithCustomValidators = (customQuery: Record<keyof T, T[keyof T]>) => {
    const errors: string[] = [];
    for (const key in customValidators) {
      if (!customValidators.hasOwnProperty(key)) {
        // eslint-disable-next-line no-continue
        continue;
      }

      const validator = customValidators[key];

      if (!validator) {
        // eslint-disable-next-line no-continue
        continue;
      }

      const validationResult: boolean = validator(customQuery[key]);

      if (!validationResult) {
        errors.push(key);
      }
    }

    return removeKeysFromObject(customQuery, errors);
  };

  const validateQuery = async (): Promise<T> => {
    const searchQuery = parseQuery();
    let validationResult;
    try {
      validationResult = await schema.validate(searchQuery, {
        abortEarly: false,
        stripUnknown: true
      });
    } catch (e) {
      const { errors, value } = e as ValidationError;
      validationResult = removeKeysFromObject(value, errors);
    }

    if (customValidators) {
      validationResult = validateQueryWithCustomValidators(
        validationResult as Record<keyof T, T[keyof T]>
      );
    }

    const search: string = generateSearchQuery(validationResult as Record<string, unknown>);

    if (search !== location.search) {
      history.push({
        pathname: ROUTER_KEYS.ROOT,
        search
      });
    }
    return validationResult as T;
  };

  useEffect(() => {
    validateQuery().then((result) => {
      setQuery(result);
    });
  }, [location.search]);

  return query;
};
