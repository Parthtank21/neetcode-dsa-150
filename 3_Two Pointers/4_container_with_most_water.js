// Problem: https://leetcode.com/problems/container-with-most-water/
// Difficulty: Medium

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

var maxArea = function (height) {
  let area = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let newArea = (right - left) * Math.min(height[left], height[right]);
    area = Math.max(area, newArea);

    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return area;
};

console.log(maxArea(height));
