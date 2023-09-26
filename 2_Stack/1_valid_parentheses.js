// Problem: https://leetcode.com/problems/valid-parentheses/
// Difficulty: Easy

let str = "()[{}()][{()}]";

const isEmpty = (arr) => {
  return arr.length === 0;
};

const isValid = (str) => {
  let stack = [];

  for (let curr of str) {
    if (curr === "(" || curr === "{" || curr === "[") {
      stack.push(curr);
    } else {
      if (isEmpty(stack)) return false;
      let top = stack.pop();

      if (
        (curr === ")" && top !== "(") ||
        (curr === "}" && top !== "{") ||
        (curr === "]" && top !== "[")
      ) {
        return false;
      }
    }
  }

  return isEmpty(stack);
};

console.log(isValid(str));
