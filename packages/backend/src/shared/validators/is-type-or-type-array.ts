export const isEnumOrEnumArray =
  <T extends object>(enumType: T) =>
  (value: unknown) => {
    if (Array.isArray(value)) {
      return value.every((v) => Object.values(enumType).includes(v));
    }
    return Object.values(enumType).includes(value);
  };
