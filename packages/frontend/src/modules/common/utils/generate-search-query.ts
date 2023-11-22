export const generateSearchQuery = (obj: Record<string, unknown>): string => {
  const queryList: string[] = [];

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      queryList.push(`${key}=${obj[key]}`);
    }
  }

  return queryList.length === 0 ? '' : `?${queryList.join('&')}`;
};
