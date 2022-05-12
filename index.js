/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
	const len = numbers.length;
	let left = 0,
		right = 1;
	const result = [];

	while (left < len) {
		// console.log('left=>', numbers[left]);

		while (right < len) {
			const sum = numbers[left] + numbers[right];
			// console.log('right=>', numbers[right], 'sum==>', sum);

			if (sum === target) return [left + 1, right + 1];
			right++;
		}
		left++;
		right = left + 1;
	}

	return result;
};

// const numbers = [2, 7, 11, 15],target = 9;
const numbers = [5, 25, 75],
	target = 100;
// const numbers = [2, 3, 4],target = 6;

console.log(twoSum(numbers, target));
