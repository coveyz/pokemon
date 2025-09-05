const question = `
给你一个整数数组 arr，请你检查是否存在两个整数 N 和 M，满足 N 是 M 的两倍（即，N = 2 * M）。
更正式地，检查是否存在两个下标 i 和 j 满足：
i != j
0 <= i, j < arr.length
arr[i] == 2 * arr[j]
`;

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist1 = function (arr) {
	arr.sort((a, b) => a - b);

	for (let index = 0; index < arr.length; index++) {
		const element = arr[index],
			target = element * 2,
			pos = arr.lastIndexOf(target);

		if (pos > -1 && pos !== index) {
			console.log('target=>', target, 'element=>', element);
			return true;
		}
	}

	return false;
};

// let arr = [10, 2, 5, 3];
// let arr = [3, 1, 7, 11];
let arr = [7, 1, 14, 11];
// let arr = [-2, 0, 10, -19, 4, 6, -8];
console.log(checkIfExist(arr));
