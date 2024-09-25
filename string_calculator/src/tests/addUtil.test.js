import { add } from "../utilis/addUtili";

test("should return null for an empty string", () => {
  const result = add("");
  expect(result).toBe(null);
});
