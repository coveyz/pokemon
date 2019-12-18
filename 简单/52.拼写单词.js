const question = `给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。
假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。
注意：每次拼写时，chars 中的每个字母都只能用一次。
返回词汇表 words 中你掌握的所有单词的 长度之和。`;

const countCharacters = (words, chars) => {
	let res = 0;
	for (const word of words) {
		let flag = true;
		let CheckList = chars.split('');
		for (const curItem of word) {
			if (CheckList.includes(curItem)) {
				CheckList.splice(CheckList.indexOf(curItem), 1);
			} else {
				flag = false;
				break;
			}
		}
		if (flag) {
			res += word.length;
		}
	}
	return res;
};


console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'));
