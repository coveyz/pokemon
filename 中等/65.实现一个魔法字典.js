const question = `
设计一个使用单词列表进行初始化的数据结构，单词列表中的单词 互不相同 。 如果给出一个单词，请判定能否只将这个单词中一个字母换成另一个字母，使得所形成的新单词存在于你构建的字典中。
实现 MagicDictionary 类：
MagicDictionary() 初始化对象
void buildDict(String[] dictionary) 使用字符串数组 dictionary 设定该数据结构，dictionary 中的字符串互不相同
bool search(String searchWord) 给定一个字符串 searchWord ，判定能否只将字符串中 一个 字母换成另一个字母，使得所形成的新字符串能够与字典中的任一字符串匹配。如果可以，返回 true ；否则，返回 false 。
`;
/**
 * Initialize your data structure here.
 */
var MagicDictionary = function () {
	this.arr = [];
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function (dictionary) {
	this.arr = dictionary;
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function (searchWord) {
	let flag = false;

	for (let index = 0; index < this.arr.length; index++) {
		const element = this.arr[index];
		let count = 0;

		if (element.length === searchWord.length) {
			for (let key = 0; key < element.length; key++) {
				const el = element[key];
				const item = searchWord[key];

				if (el !== item) {
					count += 1;
				} else if (count > 1) {
					break;
				}
			}

			if (count === 1) {
				return true;
			}
		}
	}

	return flag;
};

/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */
