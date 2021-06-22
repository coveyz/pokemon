const question = `
在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
`;
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	const obj = {};
	const arr = [];

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		obj[element] = (obj[element] || 0) + 1;

		if (obj[element] === 1) {
			arr.push(element);
		} else {
			const pos = arr.indexOf(element);
			pos > -1 && arr.splice(pos, 1);
		}
	}

	return arr[0];
};

console.log(singleNumber([3, 4, 3, 3]));
console.log(singleNumber([9, 1, 7, 9, 7, 9, 7]));
console.log(singleNumber([5, 2, 2, 2, 5, 5, 4]));
