// Problem: https://leetcode.com/problems/two-sum/
// Difficulty: Easy

let nums = [2, 7, 11, 15],
  target = 9;

// FIRST SOLUTION
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let final = target - current;

    if (nums.indexOf[final] !== -1) {
      return [i, nums.indexOf(final)];
    }
  }
};

// OPTIMIZED
const twoSum1 = (nums, target) => {
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let final = target - current;

    if (map[final] !== undefined) {
      return [map[final], i];
    } else {
      map[current] = i;
    }
  }
};

let res = twoSum(nums, target);
console.log(res);
