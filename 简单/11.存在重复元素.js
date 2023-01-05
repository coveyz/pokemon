const question = `
给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
`;

var containsDuplicate = function (nums) {
	const newNums = nums.sort((a, b) => a - b);
	let firstItem = newNums[0];
	for (let index = 1; index < newNums.length; index++) {
		if (firstItem === nums[index]) {
			return true;
		} else {
			firstItem = nums[index];
		}
	}
	return false;
};

/**
 ** 双指针
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	if (nums.length === 1) return false;

	let left = 0,
		right = nums.length - 1;
	const map = new Map();

	while (left < right) {
		if (map.has(nums[left])) return true;
		map.set(nums[left], true);
		if (map.has(nums[right])) return true;
		map.set(nums[right], true);
		left++;
		right--;
	}

	if (nums.length % 2) {
		const middle = (0 + nums.length - 1) >> 1;
		if (map.has(nums[middle])) return true;
	}

	return false;
};

console.log(containsDuplicate([2, 14, 18, 22, 22]));

// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
// console.log(containsDuplicate([1, 2, 3, 4]));
// console.log(containsDuplicate([3, 3]));
console.log(containsDuplicate([1000000000, 1000000000, 11]));
console.log(containsDuplicate([1, 5, -2, -4, 0]));
