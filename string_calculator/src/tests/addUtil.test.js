import { add } from "../utilis/addUtili";

test("should return null for an empty string", () => {
  const result = add("");
  expect(result).toBe(null);
});

test("should return the number itself for a single number input", () => {
  const result = add("1");
  expect(result).toBe(1);
});
