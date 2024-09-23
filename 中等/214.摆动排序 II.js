const question = `
给你一个整数数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。
你可以假设所有输入数组都可以得到满足题目要求的结果。
`


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    const sorted = [...nums].sort((a,b) => a - b),
        len = nums.length;
 
    let left = Math.floor((len - 1) / 2), 
        right = len - 1;
 
    for(let index = 0; index < len; index++) {
        if (index % 2 === 0) {
            nums[index] = sorted[left--];
        } else {
            nums[index] = sorted[right--];
        }
    }

    return nums;   
};