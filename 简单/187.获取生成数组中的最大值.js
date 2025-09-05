const question = `
给你一个整数 n 。按下述规则生成一个长度为 n + 1 的数组 nums ：
nums[0] = 0
nums[1] = 1
当 2 <= 2 * i <= n 时，nums[2 * i] = nums[i]
当 2 <= 2 * i + 1 <= n 时，nums[2 * i + 1] = nums[i] + nums[i + 1]
返回生成数组 nums 中的 最大 值。
`

/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
	const arr = new Array(n + 1).fill(0).map((_item, index) => (_item = index));

	for (let index = 2; index < arr.length; index++) {
		// console.log(arr[index]);
		if (index % 2) {
			const qq = (index - 1) / 2;
			arr[index] = arr[qq] + arr[qq + 1];
		} else {
			arr[index] = arr[index / 2];
		}
	}

	return Math.max(...arr);
};

// i 为 偶数时, nums[i] = nums[i / 2]
// i 为 奇数时, nums[i] = nums[i / 2] + nums[i / 2 + 1]  (这里的i/2可以看成取整后的)

console.log(getMaximumGenerated(7));
console.log(getMaximumGenerated(2));
console.log(getMaximumGenerated(3));
