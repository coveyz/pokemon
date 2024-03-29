const question = `
给你两个 非递增 的整数数组 nums1​​​​​​ 和 nums2​​​​​​ ，数组下标均 从 0 开始 计数。
下标对 (i, j) 中 0 <= i < nums1.length 且 0 <= j < nums2.length 。如果该下标对同时满足 i <= j 且 nums1[i] <= nums2[j] ，则称之为 有效 下标对，该下标对的 距离 为 j - i​​ 。​​
返回所有 有效 下标对 (i, j) 中的 最大距离 。如果不存在有效下标对，返回 0 。
一个数组 arr ，如果每个 1 <= i < arr.length 均有 arr[i-1] >= arr[i] 成立，那么该数组是一个 非递增 数组。
`;

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {
	let n1 = nums1.length,
		n2 = nums2.length,
		i = 0,
		res = 0;

	for (let j = 0; j < n2; j++) {
		while (i < n1 && nums1[i] > nums2[j]) {
			++i;
		}
		if (i < n1) {
			res = Math.max(res, j - i);
		}
	}

	return res;
};

// let nums1 = [55, 30, 5, 4, 2],nums2 = [100, 20, 10, 10, 5];
// let nums1 = [2,2,2], nums2 = [10,10,1]
let nums1 = [30, 29, 19, 5],
	nums2 = [25, 25, 25, 25, 25];

console.log(maxDistance(nums1, nums2));
