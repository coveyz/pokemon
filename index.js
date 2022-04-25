/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	const map = new Map();

	for (const key of nums) {
		const item = map.get(key);
		if (item) {
			map.set(key, item + 1);
		} else {
			map.set(key, 1);
		}
	}

	for (const item of map) {
		const [key, val] = item;
		if (val === 1) return key;
	}
};

// const arr = [2, 2, 1];
const arr = [4, 1, 2, 1, 2];

console.log(singleNumber(arr));
