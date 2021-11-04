const question = `
给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
`;

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
	// if (nums.length === 1) return [[], nums];

	// let ans = [],
	// 	template = [];

	// const dfs = (flage, cur, num) => {
	// 	if (cur >= nums.length) {
	// 		ans.push(template.slice());
	// 		return;
	// 	}
	// 	dfs(false, cur + 1, num);

	// 	if (!flage && cur && num[cur - 1] === num[cur]) return;

	// 	template.push(num[cur]);
	// 	dfs(true, cur + 1, num);
	// 	template = template.slice(0, template.length - 1);
	// };

	// dfs(true, 0, nums);

	// return ans;

	const template = [],
		ans = [];

	const dns = (cur) => {
		if (cur >= nums.length) {
			ans.push(template.slice());
			return;
		}
		template.push(nums[cur]);
		dns(cur + 1);
		template.pop(template.length - 1);
		dns(cur + 1);
	};

	dns(0);

	return ans;
};

console.log(subsets([1, 2, 3]));
// console.log(subsets([1]));
