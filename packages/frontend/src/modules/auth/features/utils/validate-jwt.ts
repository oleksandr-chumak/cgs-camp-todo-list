export function validateJWT(token: unknown): boolean {
  if (typeof token !== 'string') {
    return false;
  }

  const parts: string[] = token.split('.');

  if (parts.length !== 3) {
    return false;
  }

  let payload: unknown;
  try {
    payload = JSON.parse(atob(parts[1]));
  } catch (e) {
    return false;
  }

  const currentTimestamp: number = Math.floor(Date.now() / 1000);

  if (
    payload &&
    typeof payload === 'object' &&
    'exp' in payload &&
    typeof payload.exp === 'number' &&
    currentTimestamp <= payload.exp
  ) {
    return true;
  }

  return false;
}
