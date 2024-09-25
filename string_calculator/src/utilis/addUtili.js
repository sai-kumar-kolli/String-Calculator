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

  const negatives = numberArray.filter((num) => parseInt(num, 10) < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
  }

  return numberArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
};
