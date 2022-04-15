/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
	if (letters[letters.length - 1] <= target) return letters[0];

	let left = 0,
		right = letters.length - 1;

	while (left < right) {
		const middleIndex = Math.floor((right - left) / 2) + left;
		// console.log('middleIndex=>', middleIndex);
		const middleItem = letters[middleIndex];

		if (middleItem > target) {
			right = middleIndex;
		} else {
			left = middleIndex + 1;
		}
	}

	return letters[left];
};

// let letters = ['c', 'f', 'j'],
// 	target = 'a';

// let letters = ['c', 'f', 'j'],
// 	target = 'c';

// let letters = ['c', 'f', 'j'],
// 	target = 'j';

let letters = ['e', 'e', 'e', 'e', 'e', 'e', 'n', 'n', 'n', 'n'],
	target = 'e';

console.log(nextGreatestLetter(letters, target));
