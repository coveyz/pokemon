const question = `
    给你一个数组 nums，你可以执行以下操作任意次数：
    选择 相邻 元素对中 和最小 的一对。如果存在多个这样的对，选择最左边的一个。
    用它们的和替换这对元素。
    返回将数组变为 非递减 所需的 最小操作次数 。
    如果一个数组中每个元素都大于或等于它前一个元素（如果存在的话），则称该数组为非递减。
`

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    let operations = 0;

    while(true) {
        let isOrdered = true;
        for(let i = 1; i < nums.length; i++) {
            if (nums[i] < nums[i - 1]) {
                isOrdered = false;
                break;
            }
        };
        if (isOrdered) break;

        let minSum = Infinity,
            minIndex = -1;

        for (let i = 0; i < nums.length - 1; i++) {
            const sum = nums[i] + nums[i + 1];
            if (sum < minSum) {
                minIndex = i;
                minSum = sum;
            };
        };

        nums[minIndex] = minSum;
        nums.splice(minIndex + 1, 1);
        operations++;
    }
    

    return operations;
};

console.log(minimumPairRemoval([5,2,3,1])); // Output: 0



