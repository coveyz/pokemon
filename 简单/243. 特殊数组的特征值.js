const question = `给你一个非负整数数组 nums 。如果存在一个数 x ，使得 nums 中恰好有 x 个元素 大于或者等于 x ，那么就称 nums 是一个 特殊数组 ，而 x 是该数组的 特征值 。
注意： x 不必 是 nums 的中的元素。
如果数组 nums 是一个 特殊数组 ，请返回它的特征值 x 。否则，返回 -1 。可以证明的是，如果 nums 是特殊数组，那么其特征值 x 是 唯一的 。
`;

/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
	let left = 1,
		right = nums.length;

	while (left <= right) {
		let middle = Math.floor((left + right) / 2);
		let cut = search(nums, middle);

		if (cut === 0) {
			return middle;
		}
		if (cut > 0) {
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}
	return -1;
};

const search = (nums, count) => {
	let cut = 0;
	nums.forEach((element) => {
		if (element >= count) {
			cut++;
		}
	});

	return count - cut;
};

let nums = [0, 4, 3, 0, 4];
console.log(specialArray(nums));
