/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let arr1 = str1.toLowerCase().split("")
  arr1.sort();
  let sortedString1 = arr1.join("")
  let arr2 = str2.toLowerCase().split("")
  arr2.sort();
  let sortedString2 = arr2.join("")

  if (sortedString1 == sortedString2) {
    return true
  } else {
    return false
  }

}

module.exports = isAnagram;
