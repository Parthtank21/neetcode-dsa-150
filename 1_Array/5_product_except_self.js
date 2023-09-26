// Product: https://leetcode.com/problems/product-of-array-except-self/
// Difficulty: Medium

let nums = [1, 2, 3, 4]; // [24,12,8,6]
let nums1 = [-1, 1, 0, -3, 3]; //[0,0,9,0,0]

// FIRST TRY
const productExceptSelf = (nums) => {
  let finalArr = [];

  for (let i = 0; i < nums.length; i++) {
    let product = 1;

    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        product = product * nums[j];
      }
    }

    finalArr.push(product);
  }

  return finalArr;
};

// OPTIMIZED
const productExceptSelf1 = (nums) => {
  let len = nums.length;
  let finalArr = new Array(len).fill(1);
  let prefix = 1;

  for (let i = 0; i < len; i++) {
    finalArr[i] = prefix;
    prefix = prefix * nums[i];
  }
  // PREFIX = 1 -> 1 -> 2 -> 6 -> 24
  // FINALARR = [1, 1, 2, 6]

  let postfix = 1;
  for (let j = len - 1; j >= 0; j--) {
    finalArr[j] = finalArr[j] * postfix;
    postfix = postfix * nums[j];
  }
  // POSTFIX = 1 -> 4 -> 12 -> 24 -> 24
  // FINALARR = [24, 12, 8, 6]

  return finalArr;
};

const productExceptSelf2 = (nums) => {
  let len = nums.length;
  let prefix = 1;
  let prefix_arr = new Array(len).fill(1);

  for (let i = 0; i < len; i++) {
    prefix_arr[i] = prefix;
    prefix = prefix * nums[i];
  }
  // PREFIX_ARR = [ 1, 1, 2, 6 ]

  let postfix = 1;
  let postfix_arr = new Array(len).fill(1);
  for (let i = len - 1; i >= 0; i--) {
    postfix_arr[i] = postfix;
    postfix = postfix * nums[i];
  }
  // POSTFIX_ARR = [ 24, 12, 4, 1 ]

  let finalArr = new Array(len).fill(1);
  for (let i = 0; i < len; i++) {
    finalArr[i] = prefix_arr[i] * postfix_arr[i];
  }

  return finalArr;
};

console.log(productExceptSelf(nums1));
