// Problem: https://leetcode.com/problems/daily-temperatures/
// Difficulty: Medium

let temp = [73, 74, 75, 71, 69, 72, 76, 73];
// Output: [1,1,4,2,1,1,0,0]

// First Try
var dailyTemperatures = function (temp) {
  let len = temp.length;
  let stack = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    let curr = temp[i];

    for (let j = i + 1; j < len; j++) {
      if (curr < temp[j]) {
        let days = j - i;
        stack[i] = days;
        break;
      }
    }
  }

  return stack;
};

// Optimized
var dailyTemperatures = function (temp) {
  let len = temp.length;
  let res = new Array(len).fill(0);
  let stack = [];

  for (let i = 0; i < len; i++) {
    while (stack.length > 0 && temp[i] > stack[stack.length - 1][1]) {
      let [idx, t] = stack.pop();
      res[idx] = i - idx;
    }
    stack.push([i, temp[i]]);
  }

  return res;
};

console.log(dailyTemperatures(temp));
