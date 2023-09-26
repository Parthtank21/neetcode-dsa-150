// Problem: https://leetcode.com/problems/decode-string/
// Difficulty: Medium

let str = "3[a]2[bc]";

var decodeString = function (s) {
  let stack = [];

  for (let i of s) {
    if (i !== "]") {
      stack.push(i);
    } else {
      let substr = "";

      while (stack[stack.length - 1] !== "[") {
        substr = stack.pop() + substr;
      }
      stack.pop();

      let k = "";
      while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
        k = stack.pop() + k;
      }

      k = parseInt(k, 10);
      substr = substr.repeat(k);
      stack.push(substr);
    }
  }

  return stack.join("");
};

console.log(decodeString(str));
