const question = `
给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

0 <= a, b, c, d < n
a、b、c 和 d 互不相同
nums[a] + nums[b] + nums[c] + nums[d] == target
你可以按 任意顺序 返回答案 。
`

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b) => a -b)
    const result = [];

    const backTrack = (start, path, sum) => {
        if (path.length === 4 && sum === target) {
            result.push([...path]);
            return;
        }
        if (path.length >= 4 ) return;

        for (let index = start; index < nums.length; index++) {
            if (index > start && nums[index] === nums[index - 1]) continue;
             // 剪枝优化
            // 如果当前和后续的元素的和已经大于目标值，停止继续遍历
            if (sum + nums[index] + (3 - path.length) * nums[index] > target) break;

            // 如果当前和后续的元素的和已经小于目标值，并且当前后续的元素小于等于目标值，则继续遍历
            if (sum + nums[index] + (3 - path.length) * nums[nums.length - 1] < target) continue;

            path.push(nums[index]);
            backTrack(index + 1, path, sum + nums[index]);
            path.pop();
        }
    }

    backTrack(0, [], 0);

    return result;
};


console.log(fourSum([1,0,-1,0,-2,2], 0))
console.log(fourSum([2,2,2,2,2], 8))
console.log(fourSum([-1,0,1,2,-1,-4], -1))