import { useHistory } from 'react-router-dom';
import { useSearchQuery } from './search-query.hook';
import { generateSearchQuery } from '../utils/generate-search-query';
import { removeKeysFromObject } from '../utils/remove-keys-from-object';
import { SearchQueryNavigationOptions } from '../types/query.type';

export const useSearchQueryNavigation = () => {
  const history = useHistory();
  const { parseQuery } = useSearchQuery();

  const navigate = (query: Record<string, string>, options?: SearchQueryNavigationOptions) => {
    let oldSearchQuery: Record<string, string> = parseQuery();

    if (options?.excludeSearchQuery) {
      oldSearchQuery = removeKeysFromObject(oldSearchQuery, options.excludeSearchQuery);
    }

    const newSearchQuery: string = generateSearchQuery({ ...oldSearchQuery, ...query });
    history.push({ search: newSearchQuery });
  };

  return { navigate };
};
