// Problem: https://leetcode.com/problems/generate-parentheses/
// Difficulty: Medium

// Using Stack
var generateParenthesis = function (n) {
  let stack = [];
  let res = [];

  function backtrack(open, close) {
    if (open === close && close === n) {
      res.push(stack.join(""));
      return;
    }
    if (open < n) {
      stack.push("(");
      backtrack(open + 1, close);
      stack.pop();
    }
    if (close < open) {
      stack.push(")");
      backtrack(open, close + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);
  return res;
};

// Using String
var generateParenthesis = function (n) {
  let res = [];

  function backtrack(open, close, str) {
    if (str.length === n * 2) {
      res.push(str);
      return;
    }
    if (open < n) backtrack(open + 1, close, str + "(");
    if (close < open) backtrack(open, close + 1, str + ")");
  }

  backtrack(0, 0, "");
  return res;
};

console.log(generateParenthesis(3));
