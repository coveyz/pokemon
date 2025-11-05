const question = `
给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
`;

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
	const len = nums.length;
	if (len <= 1) {
		return len;
	}
	let slow = 1,
		fast = 1;

	while (fast < len) {
		console.log(nums[slow - 1], nums[slow - 1] !== nums[fast], nums[fast]);
		if (nums[slow - 1] !== nums[fast]) {
			nums[slow] = nums[fast];
			slow++;
		}
		fast++;
	}
	return slow;
};

/**
 * 快慢指针
 * @param {*} nums 
 * @returns 
 */
var removeDuplicates2 = function(nums) {
    if (nums.length === 0) return 0;
    
    let i = 0; // 慢指针：指向下一个不重复元素的位置
    
    for (let j = 1; j < nums.length; j++) { // 快指针：遍历数组
        if (nums[j] !== nums[i]) { // 发现不重复元素
            i++;                   // 慢指针前移
            nums[i] = nums[j];     // 将不重复元素放到正确位置
        }
        // 如果 nums[j] === nums[i]，什么都不做，继续遍历
    }
    
    return i + 1; // 返回不重复元素的个数
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
