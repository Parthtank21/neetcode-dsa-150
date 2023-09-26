// Problem: https://leetcode.com/problems/contains-duplicate/
// Difficulty: Easy

let nums1 = [1, 2, 3, 1];
let nums2 = [1, 2, 3, 4];
let nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

// FIRST SOLUTION
const containsDuplicates = (arr) => {
  let noDuplicates = [...new Set(arr)];
  return noDuplicates.length !== arr.length;
};

// OPTIMIZED
const containsDuplicates1 = (arr) => {
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return true;
    }
  }
  return false;
};

const containsDuplicates2 = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) !== i) {
      return true;
    }
  }
  return false;
};

let res = containsDuplicates2(nums1);
console.log(res);
