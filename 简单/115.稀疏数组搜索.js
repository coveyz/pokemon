const question = `稀疏数组搜索。有个排好序的字符串数组，其中散布着一些空字符串，编写一种方法，找出给定字符串的位置。`;

const findString = (words, s) => {
	return words.indexOf(s);
};

console.log(findString(['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''], 'ta'));
console.log(findString(['at', '', '', '', 'ball', '', '', 'car', '', '', 'dad', '', ''], 'ball'));
