const question = `
在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。输入一个数组，求出这个数组中的逆序对的总数。
`;

/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
	let count = 0;
	if (nums.length < 2) return count;

	const mergeSort = (front, behind) => {
		//* 前后指针相遇
		if (front === behind) return [nums[front]];
		let middle = front + ((behind - front) >> 1);
		//* 规则左半部分不包含中心， 右半部分包含
		let left = mergeSort(front, middle),
			right = mergeSort(middle + 1, behind);
		let temp = new Array(behind - front + 1).fill(0);
		//* 合并3个指针
		let cur = 0,
			l = 0,
			r = 0;
		while (l < left.length && r < right.length) {
			//* 如果右边的元素大于左边的元素, 左边的元素放到结果数组中；
			if (right[r] >= left[l]) temp[cur++] = left[l++];
			else {
				temp[cur++] = right[r++];
				//* 如果左边的 大于右边的 出现序列对；
				//* 由于左右都是有序列对， 左边当前的元素及之后的元素都会跟右边构建逆序列对；
				count += left.length - l;
			}
		}

		while (l < left.length) temp[cur++] = left[l++];
		while (r < right.length) temp[cur++] = right[r++];

		return temp;
	};

	mergeSort(0, nums.length - 1);
	return count;
};

const nums = [7, 5, 6, 4];

console.log(reversePairs(nums));
