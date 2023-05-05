/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
	const maxNumber = arr[arr.length - 1],
		targetArr = new Array(maxNumber + k).fill(1).map((item, index) => item + index);

	let slow = 0,
		fast = 0;

	while (fast < targetArr.length) {
		if (arr[slow] !== targetArr[fast]) {
			fast++;
			k--;
			if (k <= 0) {
				return targetArr[fast - 1];
			}
		} else {
			slow++;
			fast++;
		}
	}
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
console.log(findKthPositive([1, 2, 3, 4], 2));
