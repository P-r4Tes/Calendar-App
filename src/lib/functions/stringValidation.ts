export function isEmpty(str: string): boolean {
  const result = str.trim();
  if (result === "") return true;
  return false;
}
