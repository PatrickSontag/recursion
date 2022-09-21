/** product: calculate the product of an array of numbers. */

function product(nums) {
  let total;
  if (nums[0]) {
    total = nums.pop() * product(nums);
  }
  else {
    return 1;
  }
  return total;
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index=0, currentLongest=0) {
  if (index === words.length) return currentLongest;
  if (words[index].length > currentLongest) {
    currentLongest = words[index].length;
  }
  return longest(words, index + 1, currentLongest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
