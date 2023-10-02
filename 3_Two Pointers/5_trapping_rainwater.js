// Problem: https://leetcode.com/problems/trapping-rain-water/
// Difficulty: Hard

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

// Space Complexity: O(N)
var trap = function (height) {
  let len = height.length;
  let maxLeft = new Array(len);
  let maxRight = new Array(len);
  let res = 0;

  for (let i = 0; i < len; i++) {
    if (i === 0) {
      maxLeft[i] = height[i];
    } else {
      let max = Math.max(maxLeft[i - 1], height[i]);
      maxLeft[i] = max;
    }
  }

  for (let i = len - 1; i >= 0; i--) {
    if (i === len - 1) {
      maxRight[i] = height[i];
    } else {
      let max = Math.max(maxRight[i + 1], height[i]);
      maxRight[i] = max;
    }
  }

  for (let i = 0; i < len; i++) {
    res += Math.min(maxLeft[i], maxRight[i]) - height[i];
  }

  return res;
};

// Space Complexity: O(1)
var trap = function (height) {
  let l = 0,
    r = height.length - 1;
  let leftMax = height[l],
    rightMax = height[r];
  let res = 0;

  while (l < r) {
    if (leftMax < rightMax) {
      l++;
      leftMax = Math.max(leftMax, height[l]);
      res += leftMax - height[l];
    } else {
      r--;
      rightMax = Math.max(rightMax, height[r]);
      res += rightMax - height[r];
    }
  }

  return res;
};

console.log(trap(height));
