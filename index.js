/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const len = nums.length;

    for (let i = 0; i < len; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0 ) {
            nums[index] = -nums[index];
        }
    };

    const result = [];
     for (let i = 0; i < len; i++) {
        if (nums[i] > 0)  {
            result.push(i + 1);
        }
     };

     return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));