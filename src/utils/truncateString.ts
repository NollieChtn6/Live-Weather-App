/**
  Take a string as an argument and returns the first 7 characters of the string.
  @param string - The string to truncate (in this case, the string is a coordinate).
 */

export function truncateString(string: string): string {
  const length = 7;
  return string.substring(0, length);
}
