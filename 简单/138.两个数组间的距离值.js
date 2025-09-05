const question = `给你两个整数数组 arr1 ， arr2 和一个整数 d ，请你返回两个数组之间的 距离值 。
「距离值」 定义为符合此距离要求的元素数目：对于元素 arr1[i] ，不存在任何元素 arr2[j] 满足 |arr1[i]-arr2[j]| <= d 。`;

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
	const obj = {};
	for (let index = 0; index < arr1.length; index++) {
		const element = arr1[index];
		for (let number = 0; number < arr2.length; number++) {
			const item = arr2[number];
			const result = Math.abs(element - item);

			if (result > d) {
				obj[index] = true;
			} else {
				obj[index] = false;
				break;
			}
		}
	}

	let count = 0;

	Object.keys(obj).forEach((key) => {
		count = obj[key] ? (count += 1) : count;
	});

	return count;
};
