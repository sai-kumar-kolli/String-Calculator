export const add = (numbers) => {
  if (numbers === "") {
    return null;
  }
  const numberArray = numbers.split(",");
  if (numberArray.length === 1) {
    return parseInt(numbers, 10);
  }

  return numberArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
};
