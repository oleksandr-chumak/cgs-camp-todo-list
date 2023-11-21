export function capitalizeWords(inputString: string): string {
  const words: string[] = inputString.split(/(?=[A-Z])/);
  const capitalizedWords: string[] = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const resultString: string = capitalizedWords.join(' ');
  return resultString;
}
