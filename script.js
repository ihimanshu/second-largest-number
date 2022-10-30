/*
    Intro:

Write a function that returns the second largest number of an array. 

[101, 99, 34, 2, 17] = > 99

e.g. [101, 99, 34, 2, 17] 

Returns 99

[101, 99, 34, 2, 17] = > 99
[] => empty array

[17] => No second largest

[17, 17] => 17


[1000, 313, 1000, 313, 1000, 313, 24] => 313

[2500, 2500, 777, 777, 50, 777] => 777

*/

// const arr = [101, 99, 34, 2, 17];

import { secondLargestNumber } from "./secondLargestNumber.js";
const arrays = [
  [10, 20],
  [17, 17, 17],
  [4, 2, 40, 20],
  [],
  [1],
  [101, 99, 34, 2, 17],
  [1000, 313, 1000, 313, 1000, 313, 24],
  [2500, 2500, 777, 777, 50, 777],
];

const test = (arrays) => {
  arrays.map((array) => {
    console.log(
      `Second largest number from [${array}] | ${secondLargestNumber(array)}`
    );
  });
};

test(arrays);
