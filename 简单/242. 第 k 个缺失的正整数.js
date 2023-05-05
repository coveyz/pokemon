const question = `
 给你一个 严格升序排列 的正整数数组 arr 和一个整数 k 。
请你找到这个数组里第 k 个缺失的正整数。
 `;

/**
 ** 暴力
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive1 = function (arr, k) {
	const max_length = arr[arr.length - 1];
	const new_arr = new Array(max_length)
		.fill(1)
		.map((_, index) => index + 1)
		.filter((item) => !arr.includes(item));

	const len = new_arr.length;

	// console.log('len=>', len, 'k=>', k, new_arr);
	if (len >= k) {
		return new_arr[k - 1];
	} else {
		const need = k - len;
		// console.log('need=>', need);
		return max_length + need;
	}
};

/**
 ** 二分查找
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
	if (arr[0] > k) return k;

	let left = 0,
		right = arr.length;

	while (left < right) {
		const middle = Math.floor((left + right) / 2);
		let x = middle < arr.length ? arr[middle] : 2000000;

		if (x - middle - 1 >= k) {
			right = middle;
		} else {
			left = middle + 1;
		}
	}
	// return { left, right };
	return k - (arr[left - 1] - (left - 1) - 1) + arr[left - 1];
};


/**
 * 双指针
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


let arr = [2, 3, 4, 7, 11],
	k = 5;
console.log(findKthPositive(arr, k));
