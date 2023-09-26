// Problem: https://leetcode.com/problems/evaluate-reverse-polish-notation/
// Dfficulty: Medium

let t1 = ["4", "13", "5", "/", "+"]; //Output: 6
let t2 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]; //Output: 22
let t3 = ["2", "1", "+", "3", "*"]; //Output: 9

// First Try
var evalRPN1 = function (tokens) {
  let stack = [];

  for (let curr of tokens) {
    if (curr === "+" || curr === "-" || curr === "*" || curr === "/") {
      let last = stack.pop();
      let secondLast = stack.pop();

      if (curr === "+") {
        let res = secondLast + last;
        stack.push(res);
      } else if (curr === "-") {
        let res = secondLast - last;
        stack.push(res);
      } else if (curr === "*") {
        let res = secondLast * last;
        stack.push(res);
      } else {
        let res = secondLast / last;

        if (res < 0) {
          res = Math.ceil(res);
        } else {
          res = Math.floor(res);
        }

        stack.push(res);
      }
    } else {
      stack.push(+curr);
    }
  }

  return stack[0];
};

// Second Try
const evaluate = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return Math.trunc(num1 / num2);
    default:
      return null;
  }
};
var evalRPN = function (tokens) {
  let stack = [];

  for (let curr of tokens) {
    if (!isNaN(curr)) {
      stack.push(+curr);
    } else {
      let last = stack.pop();
      let secondLast = stack.pop();
      let res = evaluate(secondLast, last, curr);
      stack.push(res);
    }
  }

  return stack[0];
};

let res = evalRPN(t2);
console.log(res);
