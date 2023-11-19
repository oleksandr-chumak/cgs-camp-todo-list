type GetValueFromNestedObject<T, K extends keyof T> = K extends undefined ? T : T[K];

export function getValueFromNestedObject<T>(
  obj: T,
  path: (keyof T)[]
): GetValueFromNestedObject<T, (typeof path)[number]> {
  let result: any = obj;

  for (const key of path) {
    if (result && result.hasOwnProperty(key)) {
      result = result[key];
    } else {
      return undefined as GetValueFromNestedObject<T, keyof T>;
    }
  }

  return result;
}
