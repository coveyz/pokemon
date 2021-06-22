const question = `设计一个方法，找出任意指定单词在一本书中的出现频率。
你的实现应该支持如下操作：
WordsFrequency(book)构造函数，参数为字符串数组构成的一本书
get(word)查询指定单词在书中出现的频率`;

var WordsFrequency = function (book) {
	this.book = book.reduce((acc, cur) => {
		if (acc[cur]) {
			acc[cur] += 1;
		} else {
			acc[cur] = 1;
		}
		return acc;
	}, {});
};

/**
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function (word) {
	return this.book[word] || 0;
};

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */


