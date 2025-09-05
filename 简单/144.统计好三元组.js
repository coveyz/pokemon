const question = `给你一个整数数组 arr ，以及 a、b 、c 三个整数。请你统计其中好三元组的数量。
如果三元组 (arr[i], arr[j], arr[k]) 满足下列全部条件，则认为它是一个 好三元组 。
0 <= i < j < k < arr.length
|arr[i] - arr[j]| <= a
|arr[j] - arr[k]| <= b
|arr[i] - arr[k]| <= c
其中 |x| 表示 x 的绝对值。
返回 好三元组的数量 `;

/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */

var countGoodTriplets = function (arr, a, b, c) {
	var number = 0;

	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];
		for (let num = index + 1; num < arr.length; num++) {
			const item = arr[num];
			for (let idx = num + 1; idx < arr.length; idx++) {
				const curItem = arr[idx];
				const result1 = Math.abs(element - item);
				const result2 = Math.abs(item - curItem);
				const result3 = Math.abs(element - curItem);

				if (result1 <= a && result2 <= b && result3 <= c) {
					number += 1;
				}
			}
		}
	}

	return number;
};
