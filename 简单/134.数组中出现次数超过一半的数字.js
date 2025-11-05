const question = `数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。你可以假设数组是非空的，并且给定的数组总是存在多数元素。`;

var majorityElement1 = function (nums) {
	if (nums.length === 1) return nums[0];
	const obj = {};
	const len = Math.ceil(nums.length / 2);

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		if (obj[element]) {
			obj[element] += 1;
			if (obj[element] >= len) {
				return element;
			}
		} else {
			obj[element] = 1;
		}
	}
};


//* map
var majorityElementMap = function (nums) {
	const number = Math.floor(nums.length / 2),
		map = new Map();

	for (let index = 0; index < nums.length; index++) {
		const element = nums[index];
		// console.log(element);
		if (map.has(element)) {
			const curItem = map.get(element);
			map.set(element, curItem + 1);
			if (curItem >= number) return element;
		} else {
			map.set(element, 1);
		}
	}

	return map;
};

/**
 ** 摩尔投票法
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let candidate = null;
    let count = 0;
    
    // 第一阶段：找候选人
    for (let num of nums) {
        if (count === 0) {
            candidate = num; // 🚩 选举新候选人
        }
        count += (num === candidate) ? 1 : -1; // 📊 投票
    }
    
    return candidate; // 🏆 多数元素
};


console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2]));
console.log(majorityElement([1, 2, 1]));
