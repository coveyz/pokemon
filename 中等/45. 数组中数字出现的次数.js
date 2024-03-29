/**
 * @param {number[]} nums
 * @return {number[]}
 */
// const singleNumbers = (nums) => {
// 	const numberObj = nums.reduce((acc, cur) => {
// 		acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
// 		return acc;
// 	}, {});
// 	const result = [];

// 	Object.keys(numberObj).forEach((key) => {
// 		if (numberObj[key] === 1) {
// 			result.push(key);
// 		}
// 	});
// 	return result;
// };
const question = ` 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。
请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。
`;

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumbers = (nums) => {
	return nums.reduce((acc, cur, index) => {
		if (nums.indexOf(cur) === index && nums.lastIndexOf(cur) === index) {
			acc.push(cur);
		}
		return acc;
	}, []);
};

/**
 ** 遍历1次 + map
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumbers2 = function (nums) {
	const map = {},
		delMap = {};

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		if (delMap[element]) {
			break;
		} else if (!map[element]) {
			// console.log('map=>', map, 'element->', element);
			map[element] = element;
		} else {
			delMap[element] = true;
			delete map[element];
		}
	}

	return Object.values(map);
};

console.log(singleNumbers([4, 1, 4, 6]));
console.log(singleNumbers([1, 2, 10, 4, 1, 4, 3, 3]));
