const question = `给你一个字符串 sentence 作为句子并指定检索词为 searchWord ，其中句子由若干用 单个空格 分隔的单词组成。
请你检查检索词 searchWord 是否为句子 sentence 中任意单词的前缀。
如果 searchWord 是某一个单词的前缀，则返回句子 sentence 中该单词所对应的下标（下标从 1 开始）。
如果 searchWord 是多个单词的前缀，则返回匹配的第一个单词的下标（最小下标）。
如果 searchWord 不是任何单词的前缀，则返回 -1 。
字符串 S 的 「前缀」是 S 的任何前导连续子字符串。`;

// 1,0
const isPrefixOfWord = (sentence, searchWord) => {
	const sentenceArr = sentence.split(' ');
	for (let index = 0; index < sentenceArr.length; index++) {
	  const element = sentenceArr[index];
		if (element.indexOf(searchWord) === 0) {
			return index + 1;
		}
	}
	return -1
};

// 2,0
const isPrefixOfWord = (sentence, searchWord) => {
  let splitBySearchWord = (' ' + sentence).split(' ' + searchWord);
  console.log(splitBySearchWord)
	if (splitBySearchWord.length === 1) {
		return -1;
  }
  console.log(splitBySearchWord[0].split(' '))
	return splitBySearchWord[0].split(' ').length;
};

console.log(isPrefixOfWord('i love eating burger', 'burg'));
console.log(isPrefixOfWord('this problem is an easy problem', 'pro'));
console.log(isPrefixOfWord('hellohello hellohellohello', 'ell'));
