const question = `
给定一个只包含整数的有序数组，每个元素都会出现两次，唯有一个数只会出现一次，找出这个数。
`;

/**
 * @param {number[]} nums
 * @return {number}
 */
// var singleNonDuplicate = function (nums) {
// 	const arr = [];
// 	for (let index = 0; index < nums.length; index++) {
// 		const element = nums[index];
// 		const position = arr.indexOf(element);
// 		if (position === -1) {
// 			arr.push(element);
// 		} else {
// 			arr.splice(position, 1);
// 		}
// 	}
// 	return arr.join('');
// };

var singleNonDuplicate = function (nums) {
	let low = 0;
	let height = nums.length - 1;

	while (low < height) {
		let middle = low + (height - low) / 2;
		let guess = nums[middle];
		let haveEven = (height - middle) % 2 === 0;

		if (guess === nums[middle + 1]) {
			if (haveEven) {
				low = middle + 2;
			} else {
				height = middle - 1;
			}
		} else if (guess === nums[middle - 1]) {
			if (haveEven) {
				height = middle - 2;
			} else {
				low = middle + 1;
			}
		} else {
			return guess;
		}
	}

	return nums[low];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
	const len = nums.length;
	let left = 0,
		right = len - 1;

	while (left < right) {
		const middle = (left + right) >> 1;
		if (middle % 2 === 0) {
			if (middle + 1 < len && nums[middle] === nums[middle + 1]) {
				left = middle + 1;
			} else {
				right = middle;
			}
		} else {
			if (middle - 1 >= 0 && nums[middle] === nums[middle - 1]) {
				left = middle + 1;
			} else {
				right = middle;
			}
		}
	}

	return nums[right];
};

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));
