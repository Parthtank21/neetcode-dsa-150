// Problem: https://leetcode.com/problems/valid-palindrome/
// Difficulty: Easy

let s = "A man, a plan, a canal: Panama";

// Method - 1 Using Two Pointers Approch
var isPalindrome = function (s) {
  if (s.length == 0) return true;
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
};

// Method - 2 Using For Loop
var isPalindrome = function (s) {
  let strLen = s.length;
  if (strLen === 0) return true;
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();

  for (let i = 0; i < strLen / 2; i++) {
    if (s[i] !== s[strLen - (i + 1)]) return false;
  }

  return true;
};

// Method - 3 Using JS Methods
var isPalindrome = function (s) {
  if (s.length == 0) return true;
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return s.split("").reverse().join("") === s;
};

console.log(isPalindrome(s));
