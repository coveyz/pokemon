const question = `给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。`;

var moveZeroes = function (nums) {
	// return nums.sort((a, b) => (b === 0 ? -1 : 0));
	let left = 0,
		right = 0,
		len = nums.length;

	while (left < len) {
		//* 如果 nums[left] === 0 -> 0在前
		if (!nums[left]) {
			[nums[left], nums[right]] = [nums[right], nums[left]];
			right += 1;
		}

		left += 1;
	}

	return nums;
};


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0, right = nums.length - 1;

    while(left < right) {
        if (nums[left] === 0) {
            nums.splice(left, 1);
            nums.push(0);
            right--;
        } else {
            left++
        }
    }

    return nums;
};

console.log(moveZeroes([0, 2, 0, 1]));
console.log(moveZeroes([0, 1, 0, 3, 12]));
