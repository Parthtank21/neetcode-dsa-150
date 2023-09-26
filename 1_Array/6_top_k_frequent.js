// Problem: https://leetcode.com/problems/top-k-frequent-elements/
// Difficulty: Medium

let nums = [1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5],
  k = 2;

var topKFrequent = function (nums, k) {
  let map = {};
  let bucket = [];
  let result = [];

  for (let item of nums) {
    map[item] = (map[item] || 0) + 1;
  }

  bucket = Object.entries(map).sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++) {
    result.push(bucket[i][0]);
  }

  return result;
};

console.log(topKFrequent(nums, k));
