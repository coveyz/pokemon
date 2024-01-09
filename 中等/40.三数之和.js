const question = `给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。`;

/**
 * 思路
 * @param {Array} nums
 *  1. 先将数组进行排序
 *  2. 从左侧开始 选定一个 定值, 右侧进行求解, 获取 与其 想加为 0 的两个值
 *  3. 类似与快排, 定义首尾
 *  4. 首尾与 定值 想家
 *      1. === 0 记录
 *      2. < 0 首部 右移
 *      3. > 0 尾部 左移
 *  5. 定值右移动
 */

var threeSum = function (nums) {
	// 最左侧值为定值，右侧所有值进行两边推进计算
	let res = [];
	nums.sort((a, b) => a - b);
	let size = nums.length;
	if (nums[0] <= 0 && nums[size - 1] >= 0) {
		// 保证有正数负数
		let i = 0;
		while (i < size - 2) {
			if (nums[i] > 0) break; // 最左侧大于0，无解
			let first = i + 1;
			let last = size - 1;
			while (first < last) {
				if (nums[i] * nums[last] > 0) break; // 三数同符号，无解
				let sum = nums[i] + nums[first] + nums[last];
				if (sum === 0) {
					res.push([nums[i], nums[first], nums[last]]);
				}
				if (sum <= 0) {
					// 负数过小，first右移
					while (nums[first] === nums[++first]) {} // 重复值跳过
				} else {
					while (nums[last] === nums[--last]) {} // 重复值跳过
				}
			}
			while (nums[i] === nums[++i]) {}
		}
	}

	return res;
};


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a,b) => a - b);

    const result = [];

    for (let index = 0; index < nums.length - 2; index++) {
        if (index > 0 && nums[index - 1] === nums[index]) continue;
        let left = index +1, right = nums.length - 1;
        while (left < right) {
            const sum = nums[index] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[index], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }

                while (left < right && nums[right] === nums[right -1]) {
                    right--;
                }
                left++;
                right--;
            } 
            else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};


const nums = [-1, 0, 1, 2, -1, -4];

console.log(threeSum(nums));
