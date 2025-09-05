const question = `给出三个均为 严格递增排列 的整数数组 arr1，arr2 和 arr3。
返回一个由 仅 在这三个数组中 同时出现 的整数所构成的有序数组。`;

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function (arr1, arr2, arr3) {
	const arr = [];

	for (let index = 0; index < arr1.length; index++) {
		const element = arr1[index];
		if (arr2.includes(element) && arr3.includes(element)) {
			arr.push(element);
		}
	}

	return arr;
};
