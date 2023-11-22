import { ChangeEvent, useEffect, useState } from 'react';
import { useDebounce } from '../../../common/hooks/debounce.hook';
import { useSearchQuery } from '../../../common/hooks/search-query.hook';
import { useSearchQueryNavigation } from '../../../common/hooks/search-query-navigation.hook';

export const useSearchTodoByTitle = () => {
  const [title, setTitle] = useState('');
  const debouncedTitle: string = useDebounce(title, 500);
  const { navigate } = useSearchQueryNavigation();
  const { parseQuery } = useSearchQuery();

  useEffect(() => {
    navigate({ title: debouncedTitle });
  }, [debouncedTitle]);

  useEffect(() => {
    const query: Record<string, string> = parseQuery();

    if (query.title) {
      setTitle(query.title);
    }
  }, []);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return { title, handleTitleChange };
};
