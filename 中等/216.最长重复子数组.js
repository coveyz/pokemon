const question = `
两个整数数组 nums1 和 nums2 ，返回 两个数组中 公共的 、长度最长的子数组的长度 。
`

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    let maxLen = 0;

    const dp = new Array(nums2.length).fill(0);

    for (let i = 0; i <= nums1.length; i++) {
        for (let j = nums2.length; j >= 1; j--) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[j] = dp[j - 1]  + 1;
                maxLen = Math.max(maxLen, dp[j]);
            } else {
                dp[j] = 0;
            }
        }
    }

    return maxLen;
};

console.log(findLength([1,2,3,2,1], [3,2,1,4,7])); // 3
console.log(findLength([0,0,0,0,0], [0,0,0,0,0])); // 5