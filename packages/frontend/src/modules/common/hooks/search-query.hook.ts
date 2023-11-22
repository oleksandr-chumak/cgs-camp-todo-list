import { useLocation } from 'react-router-dom';

export const useSearchQuery = () => {
  const location = useLocation();

  const parseQuery = () => {
    const searchParams = new URLSearchParams(location.search);

    const queryObj: Record<string, string> = {};
    for (const [key, value] of searchParams.entries()) {
      queryObj[key] = value;
    }
    return queryObj;
  };

  return { parseQuery };
};
