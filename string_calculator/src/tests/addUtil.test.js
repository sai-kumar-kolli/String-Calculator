import { add } from "../utilis/addUtili";

test("should return null for an empty string", () => {
  const result = add("");
  expect(result).toBe(null);
});

test("should return the number itself for a single number input", () => {
  const result = add("1");
  expect(result).toBe(1);
});

test("should return the sum of two numbers separated by a comma", () => {
  const result = add("1,2");
  expect(result).toBe(3);
});

test("should return the sum of multiple numbers separated by a comma", () => {
  const result = add("1,2");
  expect(result).toBe(3);
});

test("should handle new lines between numbers", () => {
  const result = add("1\n2,3");
  expect(result).toBe(6);
});

test("should support custom delimiters", () => {
  const result = add("//;\n1;2");
  expect(result).toBe(3);
});

test("should throw an exception for negative numbers", () => {
  expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
});

test("should throw an exception for multiple negative numbers", () => {
  expect(() => add("1,-2,-3")).toThrow("Negative numbers not allowed: -2,-3");
});
