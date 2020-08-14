/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
	return words.filter((item) => {
		return /(^[qwertyuiop]+$)|(^[asdfghjkl]+$)|(^[zxcvbnm]+$)/i.test(item);
	});
};
