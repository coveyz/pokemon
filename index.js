/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	const strArr = s.split(' ');

	const reverse = (arr) => {
		let left = 0,
			right = arr.length - 1;

		while (left < right) {
			[arr[left], arr[right]] = [arr[right], arr[left]];
			left++;
			right--;
		}
		return arr;
	};
	let str = [];
	for (let index = 0; index < strArr.length; index++) {
		const element = strArr[index].split('');
		const item = reverse(element).join('');

		str.push(item);
	}

	return str.join(' ');
};

const s = "Let's take LeetCode contest";

console.log(reverseWords(s));
