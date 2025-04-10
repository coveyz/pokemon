/**
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

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])) // Output: 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])) // Output: 
console.log(longestConsecutive([9,1,4,7,3,-1,0,5,8,-1,6])) // Output: 