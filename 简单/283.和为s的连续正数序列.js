/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
	let left = 1,
		right = 0,
		sum = 0,
		ans = [];

	// 不超过target的一半
	while (right <= Math.round(target / 2)) {
		if (sum === target) {
			let tmp = [];
			for (let index = left; index <= right; index++) {
				tmp.push(index);
			}
			if (tmp.length) ans.push(tmp);
			sum -= left;
			left++;
		}

		// sum > target left--
		while (sum > target) {
			sum -= left;
			left++;
		}
		// sum < target right++
		while (sum < target) {
			right++;
			sum += right;
		}
	}

	return ans;
};

console.log(findContinuousSequence(9));
console.log(findContinuousSequence(15));
