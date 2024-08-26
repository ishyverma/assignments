/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let biggestNumber = -100;
  if (numbers.length == 0) {
    return undefined;
  } 
  if (numbers.length) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > biggestNumber) {
        biggestNumber = numbers[i]
      }
    }
  }
  return biggestNumber
}

module.exports = findLargestElement;