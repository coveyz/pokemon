/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const len = nums.length;

    let left = 0, right = 0;

    while (left < len) {
        if (nums[left] === 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            right++;
        }

        left++;
    }

    returnNums
};

const nums = [0,1,0,3,12];

console.log(moveZeroes(nums)); // [1,3,12,0,0]