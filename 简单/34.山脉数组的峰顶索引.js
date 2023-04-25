const question = `我们把符合下列属性的数组 A 称作山脉：
A.length >= 3
存在 0 < i < A.length - 1 使得A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
给定一个确定为山脉的数组，返回任何满足 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1] 的 i 的值。`;

// 1
const peakIndexInMountainArray1 = (arr) => {
	if (arr.length === 1) return 0;

	const peak = arr.reduce((acc, cur, index) => {
		if (arr[index - 1] < cur && cur > arr[index + 1]) {
			acc.push(index);
		}
		return acc;
	}, []);
	return peak[0];
};

// 2
const peakIndexInMountainArray3 = (arr) => {
	for (let index = 0; index < arr.length; index++) {
		if (arr[index - 1] < arr[index] && arr[index] > arr[index + 1]) {
			return index;
		}
	}
};
const peakIndexInMountainArray4 = (A) => {
	return A.indexOf(Math.max(...A));
};

/**
 * 双指针
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray5 = function (arr) {
	let left = 1,
		right = arr.length - 1,
		MAX_NUMBER = arr[0],
		MAX_INDEX = 0;

	while (left <= right) {
		const leftItem = arr[left],
			rightItem = arr[right];

		if (leftItem >= MAX_NUMBER) {
			MAX_NUMBER = leftItem;
			MAX_INDEX = left;
		}
		if (rightItem >= MAX_NUMBER) {
			MAX_NUMBER = rightItem;
			MAX_INDEX = right;
		}
		// console.log({ leftItem, rightItem });
		left++;
		right--;
	}

	// return { MAX_INDEX, MAX_NUMBER };
	return MAX_INDEX;
};

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray6 = function (arr) {
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
