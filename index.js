/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
	let result = [],
		used = new Array(nums.length).fill(false);

	const backtrack = (current) => {
		if (current.length === nums.length) {
			result.push(current.slice());
			return;
		}

		for (let index = 0; index < nums.length; index++) {
			if (!used[index]) {
				used[index] = true;
				current.push(nums[index]);
				console.log('before=>', current);
				backtrack(current);
				console.log('after-x=>', current);
				current.pop();
				console.log('after-delete=>', current);
				used[index] = false;
			}
		}
	};

	backtrack([]);

	return result;
};

// console.log(permute([1]));
// console.log(permute([0, 1]));
console.log(permute([1, 2, 3]));
