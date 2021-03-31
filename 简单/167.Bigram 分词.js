const question = `
给出第一个词 first 和第二个词 second，考虑在某些文本 text 中可能以 "first second third" 形式出现的情况，其中 second 紧随 first 出现，third 紧随 second 出现。
对于每种这样的情况，将第三个词 "third" 添加到答案中，并返回答案。
`;
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
const findOcurrences = (text, first, second) => {
	const arr = [];
	const textArr = text.split(' ');
	let num = 2;
	for (let index = 0; index < textArr.length; index++) {
		const element = textArr[index];
		if (element === first && textArr[index + 1] === second) {
			textArr[index + 2] && arr.push(textArr[index + 2]);
		}
	}

	return arr;
};

// console.log(findOcurrences('alice is a good girl she is a good student', 'a', 'good'));
// console.log(findOcurrences('we will we will rock you', 'we', 'will'));
console.log(
	findOcurrences('jkypmsxd jkypmsxd kcyxdfnoa jkypmsxd kcyxdfnoa jkypmsxd kcyxdfnoa kcyxdfnoa jkypmsxd kcyxdfnoa', 'kcyxdfnoa', 'jkypmsxd')
);
