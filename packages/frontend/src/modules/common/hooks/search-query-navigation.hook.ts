import { useHistory, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useSearchQuery } from './search-query.hook';
import { generateSearchQuery } from '../utils/generate-search-query';
import { removeKeysFromObject } from '../utils/remove-keys-from-object';
import { SearchQueryNavigationOptions } from '../types/query.type';

export const useSearchQueryNavigation = () => {
  const history = useHistory();
  const { parseQuery } = useSearchQuery();
  const location = useLocation();
  const cancel = useRef<(() => void) | null>(null);

  const navigate = (query: Record<string, string>, options?: SearchQueryNavigationOptions) =>
    new Promise((resolve) => {
      let oldSearchQuery: Record<string, string> = parseQuery();

      if (options?.excludeSearchQuery) {
        oldSearchQuery = removeKeysFromObject(oldSearchQuery, options.excludeSearchQuery);
      }
      cancel.current = () => {
        resolve(true);
      };

      const newSearchQuery: string = generateSearchQuery({ ...oldSearchQuery, ...query });
      history.push({ search: newSearchQuery });
    });

  useEffect(() => {
    if (cancel.current !== null) {
      cancel.current();
    }
  }, [location.search]);

  return { navigate };
};
