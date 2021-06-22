const question = `
给定一个字符串，请将字符串里的字符按照出现的频率降序排列。
`;

const frequencySort = (s) => {
	const obj = {};

	for (let index = 0; index < s.length; index++) {
		const element = s[index];
		obj[element] = obj[element] ? obj[element] + element : element;
	}
	return Object.values(obj)
		.sort((a, b) => {
			return b.length - a.length;
		})
		.reduce((acc, cur) => {
			acc += cur;
			return acc;
		}, '');
};

// console.log(frequencySort('tree'));
// console.log(frequencySort('cccaaa'));
// console.log(frequencySort('Aabb'));
console.log(frequencySort('loveleetcode'));
