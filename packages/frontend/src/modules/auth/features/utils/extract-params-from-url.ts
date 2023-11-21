export const extractParamsFromUrl = () => {
  const urlParts: string[] = window.location.href.split('/');
  const token: string = urlParts[urlParts.length - 1];
  return token;
};
