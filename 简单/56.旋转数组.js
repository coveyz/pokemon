const question = `给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。`;

const rotate = (nums, k) => {
	let newArr = [];
	const len = nums.length - 1;
	for (let index = 0; index < nums.length; index++) {
		let newIndex = index + k;
		if (newIndex <= len) {
			newArr[newIndex] = nums[index];
		} else {
			newArr[newIndex - len - 1] = nums[index];
		}
	}
	return newArr;
};

const rotate1 = (nums, k) => {
	for (var i = 0; i < k; i++) {
		nums.unshift(nums.pop());
	}
	return nums;
};

console.log(rotate([-1, -100, 3, 99], 2));
