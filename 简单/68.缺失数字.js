const question = `给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。`;

const missingNumber = (nums) => {
	var newSort = nums.sort((a, b) => a - b);
	const fistNum = newSort[0];
	const endNum = newSort[newSort.length - 1];

	if (fistNum !== 0) {
		return 0;
	} else if (endNum !== newSort.length) {
		return newSort.length;
	} else {
		for (let index = 0; index < newSort.length; index++) {
			if (index !== newSort[index]) {
				return index;
			}
		}
	}
};

// 高斯求和
/**
 * let len = nums.length
    let total = (len * (len + 1)) / 2
 * @param {*} nums 
 */
const missingNumber1 = (nums) => {
	let len = nums.length;
	let total = (len * (len + 1)) / 2;
	const curNumsTotal = nums.reduce((acc, cur) => (acc += cur), 0);
	return total - curNumsTotal;
};

/**
 ** Set 查找
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber2 = function(nums) {
    const seen = new Set(nums);

    for (let i =0; i <= nums.length; i++) {
        if (!seen.has(i)) return i;
    }

};


console.log(missingNumber1([9, 6, 4, 2, 3, 5, 7, 0, 1]));
