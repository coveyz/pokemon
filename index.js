/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	let left = 0,
		right = 0,
		res = 0,
		ans = -Infinity;
	const map = new Map();

	while (right < s.length) {
		const rightItem = s[right];

		if (map.has(rightItem)) {
			console.log('has+>', { right, rightItem, left, leftItem: s[left] });
			while (s[left] !== rightItem) {
				map.delete(s[left]);
				left++;
			}
			left++;
			res = right - left + 1;
			console.log('has-after=<', { map, left, leftItem: s[left] });
		} else {
			map.set(rightItem, true);
			res++;
			ans = Math.max(ans, res);
			console.log('no-has', { right, rightItem, left, leftItem: s[left], map });
		}

		right++;
	}

	return ans;
};

console.log(lengthOfLongestSubstring('abcabcbb'));
