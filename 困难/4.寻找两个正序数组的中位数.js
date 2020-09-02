const question = `给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
你可以假设 nums1 和 nums2 不会同时为空。`;

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
	const newArr = nums1.concat(nums2).sort((a, b) => a - b);

	if (newArr.length % 2) {
		const middle = Math.floor(newArr.length / 2);
		return newArr[middle];
	} else {
		const middle = Math.floor(newArr.length / 2);
		return (newArr[middle - 1] + newArr[middle]) / 2;
	}
};
