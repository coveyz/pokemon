const question = `给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。`;

const rotate1 = (nums, k) => {
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

const rotate2 = (nums, k) => {
	for (var i = 0; i < k; i++) {
		nums.unshift(nums.pop());
	}
	return nums;
};

const rotate = (nums, k) => {
	const len = nums.length;
	const arr = nums.reverse();

	k = k % len;

	magic(arr, 0, k - 1);
	magic(arr, k, len - 1);

	return arr;
};

const magic = (nums, start, end) => {
	while (start <= end) {
		[nums[start++], nums[end--]] = [nums[end], nums[start]];
	}
};

console.log(rotate([-1, -100, 3, 99], 2));
