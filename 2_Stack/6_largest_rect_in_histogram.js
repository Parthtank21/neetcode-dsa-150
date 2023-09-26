// Problem: https://leetcode.com/problems/largest-rectangle-in-histogram/
// Difficulty: Hard

let heights = [2, 1, 5, 6, 2, 3];

// Neetcode Solution
var largestRectangleArea = function (heights) {
  let maxArea = 0;
  let stack = [];

  for (let i in heights) {
    let start = i;
    let currHeight = heights[i];

    while (stack.length > 0 && stack[stack.length - 1][1] > currHeight) {
      let [idx, height] = stack.pop();
      maxArea = Math.max(maxArea, height * (i - idx));
      start = idx;
    }
    stack.push([start, currHeight]);
  }

  for (let [idx, h] of stack) {
    maxArea = Math.max(maxArea, h * (heights.length - idx));
  }

  return maxArea;
};

// CodeHelp Solution
var nextSmallerEle = function (heights, n) {
  let ans = new Array(n);
  let stack = [-1];

  for (let i = n - 1; i >= 0; i--) {
    let curr = heights[i];

    while (
      stack[stack.length - 1] !== -1 &&
      heights[stack[stack.length - 1]] >= curr
    ) {
      stack.pop();
    }
    ans[i] = stack[stack.length - 1];
    stack.push(i);
  }

  return ans;
};

var prevSmallerEle = function (heights, n) {
  let ans = new Array(n);
  let stack = [-1];

  for (let i = 0; i < n; i++) {
    let curr = heights[i];

    while (
      stack[stack.length - 1] !== -1 &&
      heights[stack[stack.length - 1]] >= curr
    ) {
      stack.pop();
    }
    ans[i] = stack[stack.length - 1];
    stack.push(i);
  }

  return ans;
};

var largestRectangleArea = function (heights) {
  let maxArea = 0;
  let len = heights.length;
  let next = nextSmallerEle(heights, len);
  let prev = prevSmallerEle(heights, len);

  for (let i = 0; i < len; i++) {
    let currHeight = heights[i];
    if (next[i] == -1) next[i] = len;
    let width = next[i] - prev[i] - 1;
    maxArea = Math.max(maxArea, currHeight * width);
  }

  return maxArea;
};

console.log(largestRectangleArea(heights));
