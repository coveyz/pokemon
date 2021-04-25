const question = `
给你一个正整数组成的数组 nums ，返回 nums 中一个 升序 子数组的最大可能元素和。
子数组是数组中的一个连续数字序列。
已知子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，若对所有 i（l <= i < r），numsi < numsi+1 都成立，则称这一子数组为 升序 子数组。注意，大小为 1 的子数组也视作 升序 子数组。
`;
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum1 = function (nums) {
	const len = nums.length;
	let count = 0;
	for (let index = 0; index < len; index++) {
		const element = nums[index];
		const qq = [element];
		for (let key = index + 1; key < len; key++) {
			const item = nums[key];
			if (element < item) {
				if (item < nums[key + 1]) {
					qq.push(item);
				} else if (!nums[key + 1]) {
					qq.push(item);
				} else if (item >= nums[key + 1]) {
					qq.push(item);
					break;
				}
			} else {
				break;
			}
		}
		const regionSum = qq.reduce((acc, cur) => acc + cur, 0);
		count = Math.max(regionSum, count);
	}

	return count;
};

const maxAscendingSum = (nums) => {
	let ans = nums[0];
	let count = ans

	for (let index = 1; index < nums.length; index++) {
		if (nums[index] > nums[index - 1]) {
			count += nums[index];
		} else {
			ans = Math.max(ans, count);
			count = nums[index];
		}
	}

	ans = Math.max(ans, count);

	return ans;
};

console.log(maxAscendingSum([10, 20, 30, 5, 10, 50]));
console.log(maxAscendingSum([10, 20, 30, 40, 50]));
console.log(maxAscendingSum([12, 17, 15, 13, 10, 11, 12]));
console.log(maxAscendingSum([100, 1]));
console.log(maxAscendingSum([6, 10, 6]));
console.log(maxAscendingSum([3, 6, 10, 1, 8, 9, 9, 8, 9]));
console.log(maxAscendingSum([9, 10]));
