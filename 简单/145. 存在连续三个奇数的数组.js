const question = `给你一个整数数组 arr，请你判断数组中是否存在连续三个元素都是奇数的情况：如果存在，请返回 true ；否则，返回 false`;

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {
	for (let index = 0; index < arr.length; index++) {
		const element = arr[index] % 2;
		const item = arr[index + 1] % 2;
		const curItem = arr[index + 2] % 2;

		if (element && item && curItem) {
			return true;
		}
	}

	return false;
};
