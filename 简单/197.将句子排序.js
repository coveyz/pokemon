/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {
	const arr = [];

	const sArr = s.split(' ');
	for (let index = 0; index < sArr.length; index++) {
		const element = sArr[index];
		const number = element.replace(/[^0-9]/g, '');
		const str = element.replace(/\d+/g, '');
		arr[number - 1] = str;
	}

	return arr.join(' ');
};

console.log(sortSentence('is2 sentence4 This1 a3'));
