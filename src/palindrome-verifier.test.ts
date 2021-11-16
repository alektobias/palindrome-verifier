import { isPalindrome } from "./palindrome-verifier";

describe("Palindrome Verifier", () => {
  it("should return true if is a Palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("should return false if isn't a Palindrome", () => {
    expect(isPalindrome("computer")).toBe(false);
  });
  it("should not process if string is empty", () => {
    expect(isPalindrome("")).toBe(false);
  });
});
