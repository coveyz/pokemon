const question = `
给你一个二维整数数组 nums ，其中 nums[i] 是由 不同 正整数组成的一个非空数组，按 升序排列 返回一个数组，数组中的每个元素在 nums 所有数组 中都出现过。
`

/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    
    let result = nums[0];

    for (let index = 1; index < nums.length; index++) {
        const arr = nums[index];
        result = result.filter(item => arr.includes(item));
    }

    return result.sort((a,b) => a - b)
};

console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))
console.log(intersection([[1,2,3],[4,5,6]]))