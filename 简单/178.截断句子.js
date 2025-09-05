const question = `
句子 是一个单词列表，列表中的单词之间用单个空格隔开，且不存在前导或尾随空格。每个单词仅由大小写英文字母组成（不含标点符号）。

例如，"Hello World"、"HELLO" 和 "hello world hello world" 都是句子。
给你一个句子 s​​​​​​ 和一个整数 k​​​​​​ ，请你将 s​​ 截断 ​，​​​使截断后的句子仅含 前 k​​​​​​ 个单词。返回 截断 s​​​​​​ 后得到的句子。
`;

var truncateSentence = function (s, k) {
	const arr = s.split(' ');
	const len = arr.length;

	if (k > len) {
		return s;
	}

	return arr.splice(0, k).join(' ');
};

console.log(truncateSentence('Hello how are you Contestant', 4));
