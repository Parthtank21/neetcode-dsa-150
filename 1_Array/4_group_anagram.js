// Problem: https://leetcode.com/problems/group-anagrams/
// Difficulty: Medium

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let strs2 = ["", "", ""];

// FIRST TRY
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

const groupAnagrams = (strs) => {
  let final_arr = [];

  for (let i = 0; i < strs.length; i++) {
    let batch = [strs[i]];
    for (let j = i + 1; j < strs.length; j++) {
      if (isAnagram3(strs[i], strs[j])) {
        let ele = strs.splice(j, 1);
        batch.push(ele[0]);
      }
    }
    final_arr.push(batch);
  }

  return final_arr;
};

// OPTIMIZED
const groupAnagrams1 = function (arr) {
  let map = {};

  for (let ele of arr) {
    let count = new Array(26).fill(0);

    for (let i in ele) {
      let index = ele.charCodeAt(i) - "a".charCodeAt(0);
      count[index] += 1;
    }

    if (map[count]) {
      map[count] = [...map[count], ele];
    } else {
      map[count] = [ele];
    }
  }

  return Object.values(map);
};

let res = groupAnagrams1(strs);
console.log(res);
