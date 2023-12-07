const question = `
给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。
每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:
0 <= j <= nums[i] 
i + j < n
返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。
`

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length <= 1) return 0;

    let curMaxReach = 0;  // 当前位置能够跳到的最远位置
    let nextMaxReach = 0;  // 下一步能够跳到的最远位置
    let jumps = 0;  // 跳跃次数

    for (let index = 0; index < nums.length - 1; index++) {
        const element = nums[index];
        
        nextMaxReach = Math.max(nextMaxReach, index + element);

        if (index === curMaxReach) {
            curMaxReach = nextMaxReach;
            jumps++;
        }
    }

    return jumps
};


console.log(jump([2,3,1,1,4]))
console.log(jump([1,2,1,1,1]))