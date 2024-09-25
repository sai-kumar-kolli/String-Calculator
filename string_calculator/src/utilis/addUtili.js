export const add = (numbers) => {
  numbers = numbers.replace(/\\n/g, "\n");
  if (numbers === "") {
    return null;
  }
  const formattedNumbers = numbers.replace(/\n/g, ",");
  const numberArray = formattedNumbers.split(",");
  if (numberArray.length === 1) {
    return parseInt(numbers, 10);
  }

  return numberArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
};
