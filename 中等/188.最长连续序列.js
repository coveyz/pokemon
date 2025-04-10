const question = `
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
`

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (!nums.length) return 0;
  nums.sort((a, b) => b - a);

  let result = 0, temp = 0;

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index], nextElm = nums[index + 1];

    const tmpResult = element - nextElm;

    if (tmpResult === 1) {
      temp++;
    } else if (tmpResult === 0) {
      temp += 0;
    }
    else {
      result = Math.max(result, temp);
      temp = 0;
    }

    // console.log({ element, nextElm, tmpResult });
  }

  return result + 1;
};


/**
 * 哈希表
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  if (!nums.length) return 0;

  const numSet = new Set(nums);
  let maxLength = 0;

  for (const num of numSet) {
      // 判断是否是 连续序列的起点
      if (!numSet.has(num - 1)) {
          let currentNum = num;
          let currentLength = 1;
          // 拓展 连续序列
          while (numSet.has(currentNum + 1)) {
              currentNum++;
              currentLength++;
          };
          // 更新
          maxLength = Math.max(maxLength, currentLength);
      };
  }

  return maxLength;
};


console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
console.log(longestConsecutive([1, 2, 0, 1]));