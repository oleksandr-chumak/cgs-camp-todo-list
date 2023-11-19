type NestedObject<T> = T | { [key: string]: NestedObject<T> };

export function createNestedObject<T>(keys: string[], value: T): NestedObject<T> {
  if (keys.length === 0) {
    return value;
  }

  const key = keys.shift() as string;
  const nestedObject: NestedObject<T> = createNestedObject(keys, value);

  return { [key]: nestedObject } as NestedObject<T>;
}
