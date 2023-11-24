import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { QueryClient, useQueryClient } from 'react-query';
import { useDebounce } from '../../../common/hooks/debounce.hook';
import { useSearchQuery } from '../../../common/hooks/search-query.hook';
import { useSearchQueryNavigation } from '../../../common/hooks/search-query-navigation.hook';
import { QUERY_KEYS, SEARCH_QUERY_KEYS } from '../../../common/consts/app-keys.const';

export const useSearchTodoByTitle = () => {
  const [title, setTitle] = useState('');
  const debouncedTitle: string = useDebounce(title, 500);
  const queryClient: QueryClient = useQueryClient();
  const titleIsFetchedFromQuery = useRef(false);
  const { navigate } = useSearchQueryNavigation();
  const { parseQuery } = useSearchQuery();

  useEffect(() => {
    const query: Record<string, string> = parseQuery();

    if (query.title) {
      setTitle(query.title);
    }
  }, []);

  const handleQueryTitleChange = async () => {
    await navigate({ title: debouncedTitle });
    queryClient.refetchQueries(QUERY_KEYS.TODOS);
  };

  const handleQueryTitleReset = async () => {
    await navigate({}, { excludeSearchQuery: [SEARCH_QUERY_KEYS.TITLE] });
    queryClient.refetchQueries(QUERY_KEYS.TODOS);
  };

  useEffect(() => {
    if (!titleIsFetchedFromQuery.current) {
      titleIsFetchedFromQuery.current = true;
      return;
    }

    if (!debouncedTitle) {
      handleQueryTitleReset();
      return;
    }

    handleQueryTitleChange();
  }, [debouncedTitle]);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return { title, handleTitleChange };
};
