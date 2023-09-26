// Problem: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Difficulty: Medium

let numbers = [2, 7, 11, 15],
  target = 9;

// Method - 1 Using Map
var twoSum = function (numbers, target) {
  let map = new Map();

  for (let i in numbers) {
    let sec = target - numbers[i];
    if (map.has(sec)) {
      return [+map.get(sec) + 1, +i + 1];
    }
    map.set(numbers[i], i);
  }
};

// Method - 2 Using Two Pointers Approch
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let currSum = numbers[left] + numbers[right];

    if (currSum > target) right--;
    if (currSum < target) left++;
    if (currSum === target) return [left + 1, right + 1];
  }
};

console.log(twoSum(numbers, target));
