import { secondLargestNumber } from "./secondLargestNumber";

const cases = [
  [[10, 20], 10],
  [[17, 17, 17], 17],
  [[4, 2, 40, 20], 20],
  [[], "Empty array"],
  [[1], "No second largest"],
  [[101, 99, 34, 2, 17], 99],
  [[1000, 313, 1000, 313, 1000, 313, 24], 313],
  [[2500, 2500, 777, 777, 50, 777], 777],
];

test.each(cases)("finds second largest number", (input, output) => {
  expect(secondLargestNumber(input)).toBe(output);
});
