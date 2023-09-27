export default function capitalize(string) {
  let upperString = '';

  const firstLetter = string.slice(0, 1);

  upperString = string.replace(firstLetter, firstLetter.toUpperCase());

  return upperString;
}
