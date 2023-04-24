const question = `假设按照升序排序的数组在预先未知的某个点上进行了旋转。
( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
请找出其中最小的元素。
你可以假设数组中不存在重复元素。`;

var findMin = function(nums) {
  return nums.sort((a,b) => a - b)[0]
};


/**
 * 双指针
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	let left = 0,
		right = nums.length - 1,
		target = Infinity;

	while (left <= right) {
		target = Math.min(nums[left], nums[right], target);
		left++;
		right--;
	}

  return target
};

/**
 * 二分查找
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
	let left = 0,
		right = nums.length - 1;
	// target = Infinity;

	while (left < right) {
		// target = Math.min(nums[left], nums[right], target);
		// left++;
		// right--;
		const middle = Math.floor((left + right) / 2);
		// const middle = left + Math.floor((right - left) / 2);

		if (nums[middle] < nums[right]) {
			right = middle;
		} else {
			left = middle + 1;
		}
	}
	// return { left, right };
	return nums[left];
};


console.log(findMin([3,4,5,1,2]))