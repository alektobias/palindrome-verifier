export function isPalindrome(str: string): boolean {
  if (typeof str !== "string") return false;
  if (str.length === 0) return false;
  return str.split("").every((char, i) => char === str[str.length - i - 1]);
}
