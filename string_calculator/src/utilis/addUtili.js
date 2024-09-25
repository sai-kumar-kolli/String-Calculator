/**
 * Adds numbers from a given input string, using default or custom delimiters.
 * Supports multiple delimiters, handles newline characters, and throws an error for negative numbers.
 *
 * @param {string} numbers - Input string containing numbers separated by delimiters.
 * @returns {number|null} - Sum of the numbers, or null if the input is empty.
 * @throws {Error} - Throws an error if the input contains negative numbers.
 */
export const add = (numbers) => {
  // Replace any occurrence of literal "\\n" with the actual newline character "\n"
  numbers = numbers.replace(/\\n/g, "\n");

  // If the input string is empty, return null as no numbers are provided
  if (numbers === "") {
    return null;
  }
  let delimiter = ",";
  let numbersPart = numbers;

  //custom delimiter
  if (numbers.startsWith("//")) {
    const delimiterEndIndex = numbers.indexOf("\n");
    delimiter = numbers.substring(2, delimiterEndIndex);
    numbersPart = numbers.substring(delimiterEndIndex + 1);
  }

  //replacing the new line with delimiter
  const formattedNumbers = numbersPart.replace(/\n/g, delimiter);
  const numberArray = formattedNumbers.split(delimiter);

  //handling the negitive numbers
  const negatives = numberArray.filter((num) => parseInt(num, 10) < 0);
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(",")}`);
  }

  return numberArray.reduce((sum, num) => sum + parseInt(num, 10), 0);
};
