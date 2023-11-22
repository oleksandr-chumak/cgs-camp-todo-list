export function removeKeysFromObject<T>(
  obj: Record<string, T>,
  keysToRemove: string[]
): Record<string, T> {
  const newObj: Record<string, T> = { ...obj };

  keysToRemove.forEach((key) => {
    delete newObj[key];
  });

  return newObj;
}
