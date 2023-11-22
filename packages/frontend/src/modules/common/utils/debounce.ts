type DebounceFunction<T extends (...args: any[]) => any> = (
  func: T,
  delay: number
) => (...args: Parameters<T>) => void;

export const debounce: DebounceFunction<(...args: any[]) => any> = (func, delay) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<typeof func>) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
