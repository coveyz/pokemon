/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	if (haystack === needle) return 0;

	let left = 0,
		right = needle.length;

	while (right <= haystack.length) {
		const tmp = haystack.slice(left, right);
		console.log(tmp);

		if (tmp === needle) return left;

		left++;
		right++;
	}

	return -1;
};

// const haystack = 'sadbutsad',needle = 'sad';
const haystack = 'abc',
	needle = 'c';

console.log(strStr(haystack, needle));
