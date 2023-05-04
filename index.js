/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
	let p1 = 0,
		p2 = 0,
		cur;
	const sorted = new Array(m + n).fill(0);

	while (p1 < m || p2 < n) {
		if (p1 === m) {
			cur = nums2[p2++];
		} else if (p2 === n) {
			cur = nums1[p1++];
		} else if (nums1[p1] > nums2[p2]) {
			cur = nums2[p2++];
		} else {
			cur = nums1[p1++];
		}

		sorted[p1 + p2 - 1] = cur;
	}

	console.log(sorted);

	for (let index = 0; index < m + n; index++) {
		nums1[index] = sorted[index];
	}
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
