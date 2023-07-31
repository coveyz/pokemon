/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
	const charPositions = new Map();

	for (let index = 0; index < t.length; index++) {
		const element = t[index];
		if (!charPositions.has(element)) {
			charPositions.set(element, []);
		}
		charPositions.get(element).push(index);
	}

	let prePos = -1;

	for (const char of s) {
		if (!charPositions.has(char)) return false;

		const position = charPositions.get(char);
		let left = 0,
			right = position.length - 1;

		while (left <= right) {
			const middle = Math.floor((left + right) / 2);

			if (position[middle] <= prePos) {
				left = middle + 1;
			} else {
				right = middle - 1;
			}
		}

		if (left === position.length) return false;

		prePos = position[left];
	}

	return true;
};

console.log(isSubsequence('abc', 'ahbgdc'));
console.log(isSubsequence('axc', 'ahbgdc'));
console.log(isSubsequence('aaaaaa', 'bbaaaa'));
