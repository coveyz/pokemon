const question = `
给定一个排序好的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。
整数 a 比整数 b 更接近 x 需要满足：
|a - x| < |b - x| 或者
|a - x| == |b - x| 且 a < b
`;
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
	const arrSortAfter = arr
		.sort((a, b) => {
			return a === b ? a - b : Math.abs(a - x) - Math.abs(b - x);
		})
		.splice(0, k)
		.sort((a, b) => a - b);

	return arrSortAfter;
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
console.log(findClosestElements([1, 1, 1, 10, 10, 10], 1, 9));
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
