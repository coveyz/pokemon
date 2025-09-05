/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	const map = {};
	let odd = false,
		ans = 0;

	for (const key of s) {
		if (map[key]) {
			map[key] += 1;
		} else {
			map[key] = 1;
		}
	}

	for (const key in map) {
		if (map[key] % 2 === 0) {
			ans += map[key];
		} else {
			odd = true;
			ans += map[key] - 1;
		}
	}

	if (odd) ans++;

	return ans;
};

const s = 'abccccdd';

console.log(longestPalindrome(s));
