export const add = (numbers) => {
  if (numbers === "") {
    return null;
  }
  return parseInt(numbers, 10);
};
