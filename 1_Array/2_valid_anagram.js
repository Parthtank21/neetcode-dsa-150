// Problem: https://leetcode.com/problems/valid-anagram/
// Difficulty: Easy

let s = "anagram",
  t = "nagaram";
let s1 = "rat",
  t1 = "car";

// FIRST SOLUTION
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  return s.split("").sort().join("") === t.split("").sort().join("");
};

const isAnagram1 = function (s, t) {
  if (s.length !== t.length) return false;

  let arr = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    arr[t.charCodeAt(i) - "a".charCodeAt(0)]--;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      return false;
    }
  }

  return true;
};

// OPTIMIZED
const isAnagram3 = function (s, t) {
  if (s.length !== t.length) return false;

  let map = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) return false;
    map[t[i]] = map[t[i]] - 1;
  }

  return true;
};

let res = isAnagram3(s, t);
console.log(res);
