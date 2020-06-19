const question = `给你一个整数数组 nums，请你选择数组的两个不同下标 i 和 j，使 (nums[i]-1)*(nums[j]-1) 取得最大值。
请你计算并返回该式的最大值。`;

const maxProduct = (nums) => {
  const newNums = nums.sort((a, b) => b - a);
  return (newNums[0] - 1) *  (newNums[1] - 1)
};

console.log(maxProduct([3, 4, 5, 2]));
console.log(maxProduct([1,5,4,5]));
console.log(maxProduct([3,7]));
