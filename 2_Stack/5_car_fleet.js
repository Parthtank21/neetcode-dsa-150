// Problem: https://leetcode.com/problems/car-fleet/
// Difficulty: Medium

let target = 12,
  position = [10, 8, 0, 5, 3],
  speed = [2, 4, 1, 1, 3];

// Easy to understand
var carFleet = function (target, position, speed) {
  let pairs = [];
  let stack = [];

  for (let i in position) {
    pairs.push([position[i], speed[i]]);
  }

  pairs = pairs.sort((a, b) => b[0] - a[0]);

  for (let [pos, s] of pairs) {
    let time = (target - pos) / s;
    stack.push(time);

    let len = stack.length;
    if (len >= 2 && stack[len - 1] <= stack[len - 2]) {
      stack.pop();
    }
  }

  return stack.length;
};

// Using Reduce and chaining
var carFleet = function (target, position, speed) {
  let stack = [];

  let pairs = position
    .reduce((acc, curr, i) => {
      acc.push([curr, speed[i]]);
      return acc;
    }, [])
    .sort((a, b) => b[0] - a[0]);

  for (let [pos, s] of pairs) {
    let time = (target - pos) / s;
    stack.push(time);

    let len = stack.length;
    if (len >= 2 && stack[len - 1] <= stack[len - 2]) {
      stack.pop();
    }
  }

  return stack.length;
};

let res = carFleet(target, position, speed);
console.log(res);
