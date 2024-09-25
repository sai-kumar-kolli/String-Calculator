export const add = (numbers) => {
  numbers = numbers.replace(/\\n/g, "\n");
  if (numbers === "") {
    return null;
  }
  let delimiter = ",";
  let numbersPart = numbers;

  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterEndIndex);
    numbersPart = numbers.substring(delimiterEndIndex + 1);
  }

  const formattedNumbers = numbersPart.replace(/\n/g, delimiter);
  const numberArray = formattedNumbers.split(delimiter);

  return numberArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
};
