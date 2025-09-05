const question = `给你一个数字数组 arr 。
如果一个数列中，任意相邻两项的差总等于同一个常数，那么这个数列就称为 等差数列 。
如果可以重新排列数组形成等差数列，请返回 true ；否则，返回 false 。`;

const canMakeArithmeticProgression = (arr) => {
	const newArr = arr.sort((a, b) => b - a);
	let res = [];

	for (let index = 0; index < newArr.length - 1; index++) {
		const cha = newArr[index] - newArr[index + 1];
		if (!res.length) {
			res.push(cha);
		} else if (!res.includes(cha)) {
			return false;
		}
	}

	return true;
};

/**
 ** 双指针
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression2 = function (arr) {
	arr.sort((a, b) => a - b);
	const len = arr.length;
	let start = 0;
	end = 1;
	count = Math.abs(arr[end] - arr[start]);

	while (end < len) {
		let res = arr[end] - arr[start];
		if (count !== res) return false;
		start++;
		end++;
	}

	return true;
};

console.log(canMakeArithmeticProgression([3, 5, 1]));
console.log(canMakeArithmeticProgression([1, 2, 4]));
