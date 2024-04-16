// Your tests here
import { isPalindrome } from "../utils.js";

describe("isPalindrome", () => {
    it("determines if the string is the same reversed", () => {
        const string = "racecar";

        const palindrome = isPalindrome(string)

        expect(palindrome).toBe(true)
    });
});

it("handles uppercase and lowercase input", () => {
    const string = "RaCeCaR";

    const palindrome = isPalindrome(string);

    expect(palindrome).toBe(true);
})