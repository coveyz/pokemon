const question = `统计一个数字在排序数组中出现的次数。`;

const search = (nums, target) => {
	let number = 0;

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];

		if (element === target) {
			number += 1;
		} else if (element > target) {
			break;
		}

		// console.log(element);
	}

	return number;
};

/**
 ** 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search2 = function (nums, target) {
	const binarySearch = (nums, target, lower) => {
		let left = 0,
			right = nums.length - 1,
			ans = nums.length;
		while (left <= right) {
			const middle = Math.floor((left + right) / 2);
			const middleItem = nums[middle];

			if (middleItem > target || (lower && middleItem >= target)) {
				right = middle - 1;
				ans = middle;
			} else {
				left = middle + 1;
			}
		}

		return ans;
	};

	let ans = 0;
	const leftIndex = binarySearch(nums, target, true);
	const rightIndex = binarySearch(nums, target, false) - 1;
	if (leftIndex <= rightIndex && rightIndex < nums.length && nums[leftIndex] === target && nums[rightIndex] === target) {
		ans = rightIndex - leftIndex + 1;
	}

	return ans;
};


/**
 ** 双指针
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search3 = function (nums, target) {
	const len = nums.length;
	let left = 0,
		right = nums.length - 1,
		res = 0;

	while (left < right) {
		const leftItem = nums[left],
			rightItem = nums[right];

      
    if (leftItem === target) {
			res += 1;
		}
    if (rightItem === target) {
      res += 1
    }

		left++;
		right--;
	}
//   return res 
	return nums.length % 2 ? (nums[left] === target ? res + 1 : res) : res;
};

console.log(search([5, 7, 7, 8, 8, 10], 8));
console.log(search([5, 7, 7, 8, 8, 10], 6));
