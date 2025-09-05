const question = `
编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
`;
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
	s = s.split('');
	const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

	let left = 0;
	let right = s.length - 1;

	while (left <= right) {
		if (!vowels.includes(s[left])) {
			left += 1;
			continue;
		}
		if (!vowels.includes(s[right])) {
			right -= 1;
			continue;
		}

		if (vowels.includes(s[left]) && vowels.includes(s[right])) {
			const tmp = s[left];
			s[left] = s[right];
			s[right] = tmp;
			left += 1;
			right -= 1;
			continue;
		}
	}

	return s.join('');
};

// console.log(reverseVowels('hello'));
// console.log(reverseVowels('leetcode'));
// console.log(reverseVowels('aA'));
console.log(reverseVowels('race a car')); //* raca e car
console.log(reverseVowels("A man, a plan, a canal: Panama"))
