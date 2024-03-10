export function isEmpty(str: string): boolean {
  const result = str?.trim();
  if (result === "") return true;
  return false;
}

export function isStringArgumentsValid(...args: string[]): boolean {
  for (const arg of args) {
    if (isEmpty(arg)) return false;
  }
  if (args.length === 0) return false;
  return true;
}
