const question = `
输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。
`;

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords1 = function (s) {
	const arr = s.trim().split(' ').reverse(),
		len = arr.length;
	return arr.reduce((acc, cur, index) => {
		if (cur) {
			acc = acc + cur + (index === len - 1 ? '' : ' ');
		}

		return acc;
	}, '');
};

/**
 ** 双指针
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
	const reverse = (strArr) => {
		let left = 0,
			right = strArr.length - 1;
		while (left < right) {
			[strArr[left], strArr[right]] = [strArr[right], strArr[left]];
			left++;
			right--;
		}
		return strArr;
	};
	const arr = reverse(s.trim().split(' '));

	let str = '';

	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];
		if (element) {
			str += element + (index === arr.length - 1 ? '' : ' ');
		}
	}

	return str;
};

// const str = 'the sky is blue';
// const str = '  hello world!  ';
const str = 'a good   example';

console.log(reverseWords(str));
