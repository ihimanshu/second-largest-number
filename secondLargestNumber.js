function findSecondLargestNumber(arr) {
  let largestNumber = arr[0];
  let secondLargestNumber = -Infinity;

  for (let i = 1; i < arr.length; i++) {
    if (largestNumber < arr[i]) {
      secondLargestNumber = largestNumber;
      largestNumber = arr[i];
    } else if (secondLargestNumber < arr[i] && largestNumber !== arr[i]) {
      secondLargestNumber = arr[i];
    }
  }

  return secondLargestNumber === -Infinity
    ? largestNumber
    : secondLargestNumber;
}

export function secondLargestNumber(array) {
  const length = array.length;
  if (!length) {
    return "Empty array";
  } else if (length === 1) {
    return "No second largest";
  } else {
    return findSecondLargestNumber(array);
  }
}
