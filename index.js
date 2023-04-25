/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
	let left = 0,
		right = arr.length - 2,
		res = 0;

	while (left <= right) {
		const middle = Math.floor((left + right) / 2);
		if (arr[middle] > arr[middle + 1]) {
			res = middle;
			right = middle - 1;
		} else {
			left = middle + 1;
		}
	}

	return res;
};

console.log(peakIndexInMountainArray([0, 1, 0]));
// console.log(peakIndexInMountainArray([0, 2, 1, 0]));
// console.log(peakIndexInMountainArray([3, 4, 5, 1]));
// console.log(peakIndexInMountainArray([18, 29, 38, 59, 98, 100, 99, 98, 90]));
