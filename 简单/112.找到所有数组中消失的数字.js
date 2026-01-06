const question = `给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。
找到所有在 [1, n] 范围之间没有出现在数组中的数字。
您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内`;

const findDisappearedNumbers = (nums) => {
	const MaxNumber = nums.length;
	const minNumber = 1;
	const res = [];
	for (let index = minNumber; index <= MaxNumber; index++) {
		if (!nums.includes(index)) {
			res.push(index);
		}
	}
	return res;
};

/**
 ** 使用 Set 来存储出现过的数字
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers1 = function(nums) {
    const acc = new Set(nums);

    let pos = 1; len = nums.length;
    const result = [];

    while(pos <= len) {
        if (!acc.has(pos)) {
            result.push(pos);
        };
        pos++;
    }

    return result;
};


/**
 * 使用额外数组来标记出现过的数字
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers3 = function(nums) {
	/**
	//* 🧠
	思路：原地标记法
	1. 遍历数组，将每个数字作为索引，把对应位置的数字标记为负数
	2. 第一次遍历：对于每个数字 nums[i]，将 nums[|nums[i]| - 1] 标记为负数
	3. 第二次遍历：如果 nums[i] > 0，说明没有数字指向这个位置，即 i+1 这个数字缺失
	4. 时间复杂度 O(n)，空间复杂度 O(1)（不算返回数组）

	例子：[4,3,2,7,8,2,3,1]
	- 看到4，标记nums[3]为负
	- 看到3，标记nums[2]为负  
	- 看到2，标记nums[1]为负
	- 看到7，标记nums[6]为负
	- 看到8，标记nums[7]为负
	- 看到2，nums[1]已经是负数，跳过
	- 看到3，nums[2]已经是负数，跳过
	- 看到1，标记nums[0]为负

	最终nums[4]和nums[5]还是正数，所以缺失的是5和6
	*/
    const  n = nums.length;

    for (let i = 0; i < n; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0)  {
            nums[index] = -nums[index];
        }
    };

    const result = [];
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }

    return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
console.log(findDisappearedNumbers([2,2]));
