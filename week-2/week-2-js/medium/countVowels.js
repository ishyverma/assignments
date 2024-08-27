/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  if (str == 0) {
    return 0;
  }
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u']
  const arrayedString = str.toLowerCase().split("")
  for (let i = 0; i < arrayedString.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (arrayedString[i] == vowels[j]) {
        count++
      }
    }
  }
  return count
}


module.exports = countVowels;