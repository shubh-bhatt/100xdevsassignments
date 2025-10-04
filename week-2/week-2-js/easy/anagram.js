/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let newStr1 = str1.toLowerCase();
  let newStr2 = str2.toLowerCase();

  let count = 0;
  for (let i = 0; i < newStr1.length; i++) {
    for (let j = 0; j < newStr2.length; j++) {
      if (newStr1[i] == newStr2[j]) {
        count++;
        break;
      }
    }
  }

  if (count == newStr1.length && count == newStr2.length) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;
