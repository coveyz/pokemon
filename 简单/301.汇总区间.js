const question = `
给定一个  无重复元素 的 有序 整数数组 nums 。
返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表 。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。
列表中的每个区间范围 [a,b] 应该按如下格式输出：
"a->b" ，如果 a != b
"a" ，如果 a == b
`;

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
	if (!nums.length) return [];

	let result = [],
		tmpArr = [`${nums[0]}`];

	for (let index = 1; index < nums.length; index++) {
		const element = nums[index],
			curTmpArr = tmpArr[tmpArr.length - 1] * 1;

		if (curTmpArr + 1 === element) {
			tmpArr.push(element);
		} else {
			if (tmpArr.length === 1) {
				result.push(`${tmpArr[0]}`);
			} else {
				result.push(`${tmpArr[0]}->${tmpArr[tmpArr.length - 1]}`);
			}
			tmpArr = [element];
		}
	}

	if (tmpArr.length) {
		if (tmpArr.length === 1) {
			result.push(`${tmpArr[0]}`);
		} else {
			result.push(`${tmpArr[0]}->${tmpArr[tmpArr.length - 1]}`);
		}
	}

	return result;
};

/**
 ** 简洁方法
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    if (nums.length === 0) return [];
    
    const result = [];
    let start = 0;  // 记录区间起始索引
    
    for (let i = 0; i < nums.length; i++) {
        // 检查是否到达区间末尾
        if (i === nums.length - 1 || nums[i + 1] !== nums[i] + 1) {
            // 构造区间字符串
            if (start === i) {
                result.push(nums[start].toString());  // 单个数字
            } else {
                result.push(`${nums[start]}->${nums[i]}`);  // 区间
            }
            start = i + 1;  // 更新下一个区间的起始位置
        }
    }
    
    return result;
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]));
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));
console.log(summaryRanges([]));
