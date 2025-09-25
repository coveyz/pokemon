const question = `
给定长度为 2n 的整数数组 nums ，你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从 1 到 n 的 min(ai, bi) 总和最大。
返回该 最大总和 。
`

//? 贪心 核心观察
//? 问了让 较小值的和最大， 每队的较小值尽可能的打

//? 贪心策略
//? 排序后， 相邻的两个数配对


var arrayPairSum1 = function(nums) {
  if (nums.length < 3) {
    return nums.sort((a,b) => a-b)[0]
  }
  return nums.sort((a,b) => a-b).filter((_,index) => (index + 1) % 2 !== 0).reduce((acc,cur) => acc + cur,0)
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a,b) => a - b);

    let sum = 0;

    for (let i = 0; i < nums.length; i+=2) {
        sum += nums[i];
    }

    return sum;
};

console.log(arrayPairSum([6214, -2290, 2833, -7908]));
// console.log(arrayPairSum([1, -1]));
