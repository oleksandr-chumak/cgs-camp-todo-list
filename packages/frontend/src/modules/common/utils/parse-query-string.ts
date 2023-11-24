export function parseQueryString(): Record<string, string> {
  const queryString = window.location.search.slice(1);
  const params = new URLSearchParams(queryString);
  const result: Record<string, string> = {};

  params.forEach((value, key) => {
    result[key] = value;
  });

  return result;
}
