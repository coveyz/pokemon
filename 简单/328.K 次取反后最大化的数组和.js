const question = `
    给你一个整数数组 nums 和一个整数 k ，按以下方法修改该数组：
    选择某个下标 i 并将 nums[i] 替换为 -nums[i] 。
    重复这个过程恰好 k 次。可以多次选择同一个下标 i 。
    以这种方式修改数组后，返回数组 可能的最大和 。
`;

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
    nums.sort((a,b) => Math.abs(b) - Math.abs(a));

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= 0 && k > 0) {
            nums[i] = -nums[i];
            k--;
        };
    };

    // 若剩余次数为偶数：怎么翻都能“翻回来”，最终和不变；
    // 若剩余次数为奇数：翻一次最小的数，能得到最大和。
    if (k % 2 === 1) {
        nums[nums.length - 1] = -nums[nums.length - 1];
    }


    return nums.reduce((acc,cur) => acc += cur, 0);
};


console.log(largestSumAfterKNegations([4,2,3], 1)); // 5