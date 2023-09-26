// Problem: https://leetcode.com/problems/longest-consecutive-sequence/
// Difficulty: Medium

let nums = [100, 101, 102, 104, 103, 200, 1, 3, 2];

var longestConsecutive = function (nums) {
  let numsSet = new Set(nums);
  let longest = 0;

  for (let num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let length = 0;

      while (numsSet.has(num + length)) {
        length += 1;
      }

      longest = Math.max(longest, length);
    }
  }

  return longest;
};

console.log(longestConsecutive(nums));
