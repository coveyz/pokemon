const question = `给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。`;

const reverseWords = (str) => {
	return str
		.split(' ')
		.reduce((acc, cur, index) => {
			acc.push(cur.split('').reverse().join(''));
			return acc;
		}, [])
		.join(' ');
};

//* 1 的变形 用指针
var reverseWords2 = function (s) {
	s = s.split(' ');
	let res = '';

	for (let index = 0; index < s.length; index++) {
		const element = s[index];
		const qq = magic(element.split(''), 0, element.length - 1);
		res = `${res}${qq}${index !== s.length - 1 ? ' ' : ''}`;
	}

	return res;
};

const magic = (item, start, end) => {
	while (start < end) {
		[item[start++], item[end--]] = [item[end], item[start]];
	}

	return item.join('');
};

//* 双指针
const reverseWords3 = (s) => {
	s = s.split('');
	const len = s.length;
	let left = 0,
		right = 0,
		pos;

	while (left < len) {
		//* 下一个事空格了  或者 现在已经是最后一个了
		if (s[right + 1] === ' ' || right === len - 1) {
			//* 因为 接下来 进行调换 left,right 都会进行操作 但是我操作完 要进行操作 pos
			pos = right + 1;
			//* 调换位置
			while (left < right) {
				let tmp = s[left];
				s[left] = s[right];
				s[right] = tmp;
				right -= 1;
				left += 1;
			}
			right = pos + 1;
			left = pos + 1;
		} else {
			right += 1;
		}
	}

	return s.join('');
};

/**
 ** 字符串 -> 数组， 双指针
 * @param {string} s
 * @return {string}
 */
var reverseWords2 = function (s) {
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

console.log(reverseWords("Let's take LeetCode contest"));
