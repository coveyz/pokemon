/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
	arr.sort((a, b) => Math.abs(a - x) - Math.abs(b - x));

	return arr.slice(0, k).sort((a, b) => a - b);
};

// let arr = [1, 2, 3, 4, 5],k = 4,x = 3;
let arr = [1,2,3,4,5], k = 4, x = -1

console.log(findClosestElements(arr, k, x));
