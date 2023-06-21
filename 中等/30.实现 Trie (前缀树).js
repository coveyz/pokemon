const question = `实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。`

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.arr = []
};

/**
* Inserts a word into the trie. 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  this.arr.push(word)
};

/**
* Returns if the word is in the trie. 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  return this.arr.indexOf(word) > -1
};

/**
* Returns if there is any word in the trie that starts with the given prefix. 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {

  const keys = this.arr.filter(item => {
      return item.indexOf(prefix) === 0
  })

  return keys.length
};

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/





//🧀 前缀树
var Trie = function () {
	this.children = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
	let node = this.children;
	// console.log('insert-node=>', JSON.stringify(node));
	for (const ch of word) {
		if (!node[ch]) {
			node[ch] = {};
		}
		node = node[ch];
	}

	node.isEnd = true;

	return node;
};

Trie.prototype.searchPrefix = function (prefix) {
	let node = this.children;

	for (const ch of prefix) {
		if (!node[ch]) {
			return false;
		}
		node = node[ch];
	}

	return node;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
	const node = this.searchPrefix(word);
	return node !== undefined && node.isEnd !== undefined;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
	return this.searchPrefix(prefix);
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

var obj = new Trie();
obj.insert('apple');
console.log(obj.search('apple'));
console.log(obj.search('app'));
console.log(obj.startsWith('app'));
obj.insert('app');
console.log(obj.search('app'));
