const question = `给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
说明：本题中，我们将空字符串定义为有效的回文串。`;

const isPalindrome = (str) => {
	const newStr = str.replace(/\W/g, '').toLowerCase();
	const reverseOfNewStr = newStr.split('').reverse().join('');

	return newStr === reverseOfNewStr;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
