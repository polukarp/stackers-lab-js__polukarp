// Task 1

const increaseByPosition = (arr) => arr.map((num, i) => (num + i + 1) % 10);

// Task 2

const sumTwoLowestPositiveIntegers = (numbers) =>
  numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b, 0);

// Task 3

const performBasicMathOperations = (operation, value1, value2) => {
  if (typeof value1 !== "number" || typeof value2 !== "number")
    throw new Error("Both operands must be numbers");

  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
  };

  if (!(operation in operations))
    throw new Error(`Unsupported operation: ${operation}`);
  return operations[operation](value1, value2);
};
