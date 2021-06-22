const question = `在英语中，我们有一个叫做 词根(root)的概念，它可以跟着其他一些词组成另一个较长的单词——我们称这个词为 继承词(successor)。例如，词根an，跟随着单词 other(其他)，可以形成新的单词 another(另一个)。
现在，给定一个由许多词根组成的词典和一个句子。你需要将句子中的所有继承词用词根替换掉。如果继承词有许多可以形成它的词根，则用最短的词根替换它。
你需要输出替换之后的句子。`;

/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */

var replaceWords = function (dict, sentence) {
  const result = [];
  
  dict = dict.sort();
  
	const sentenceArr = sentence.split(' ');

	for (let index = 0; index < sentenceArr.length; index++) {
		const element = sentenceArr[index];
		let flag = true;

		for (let number = 0; number < dict.length; number++) {
			const item = dict[number];

			if (element.indexOf(item) === 0) {
				result.push(item);
				flag = false;
				break;
			}
		}

		if (flag) {
			result.push(element);
		}
	}

	return result.join(' ');
};
