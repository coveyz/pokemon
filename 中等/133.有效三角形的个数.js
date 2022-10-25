const question = `
给定一个包含非负整数的数组 nums ，返回其中可以组成三角形三条边的三元组个数
`;

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
	nums.sort((a, b) => a - b);

	console.log('newarr=>', nums);
	let res = 0;

	for (let index = 0; index < nums.length; index++) {
		let left = 0,
			right = index - 1;
		console.log('left->', left, 'right->', right, 'index=>', index);
		while (left < right) {
			console.log('leftItem=>', nums[left], 'rightItem=>', nums[right], 'curItem=>', nums[index]);
			if (nums[left] + nums[right] > nums[index]) {
				res += right - left;
				console.log('✅=>', res);
				right--;
			} else {
				console.log('❌');
				left++;
			}
		}
	}

	return res;
};

let nums = [2, 2, 3, 4];

console.log(triangleNumber(nums));
