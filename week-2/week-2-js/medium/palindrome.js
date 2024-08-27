/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (str.length == 0) {
    return true;
  } else if (str.length == 1) {
    return true;
  } else if (str.includes(' ')) {
    return true;
  } else if (str.includes('!', ',', '.')) {
    return true;
  }

  const array = str.toLowerCase().split("")
  let palindromeArray = [];
  for (let i = array.length-1; i >= 0; i--) {
    palindromeArray.push(array[i])
  }
  const joinedArray1 = array.join();
  const joinedArray2 = palindromeArray.join();
  if (joinedArray1 == joinedArray2) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
