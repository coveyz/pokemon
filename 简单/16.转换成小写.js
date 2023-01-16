const question = `实现函数 ToLowerCase()，该函数接收一个字符串参数 str，并将该字符串中的大写字母转换成小写字母，之后返回新的字符串。`;

var toLowerCase1 = (str) => {
	const lowerCase = str.split('').reduce((acc, cur) => {
		acc.push(cur.toLowerCase());
		return acc;
	}, []);
	return lowerCase.join('');
};

/**
 * 自行实现 toLowerCase Api
 * @param {*} str 
 * @returns 
 */
const toLowerCase = (str) => {
	const res = [];

	for (let key of str) {
		if (key.charCodeAt() >= 65 && key.charCodeAt() <= 90) {
			console.log(key, key.charCodeAt(), key.charCodeAt() | 32);
			key = String.fromCharCode(key.charCodeAt() | 32);
		}
		res.push(key);
	}

	return res.join('');
};

console.log(toLowerCase('Hello'));
