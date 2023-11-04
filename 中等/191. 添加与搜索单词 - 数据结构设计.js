const question = `
请你设计一个数据结构，支持 添加新单词 和 查找字符串是否与任何先前添加的字符串匹配 。

实现词典类 WordDictionary ：
WordDictionary() 初始化词典对象
void addWord(word) 将 word 添加到数据结构中，之后可以对它进行匹配
bool search(word) 如果数据结构中存在字符串与 word 匹配，则返回 true ；否则，返回  false 。word 中可能包含一些 '.' ，每个 . 都可以表示任何一个字母。
`



class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
    }
}



var WordDictionary = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this.root;
    // console.log('root=>', node);
    // console.log('word=>', word);

    for (const char of word) {
        // console.log('char=>', char);
        if (!node.children.has(char)) {
            node.children.set(char, new TrieNode());
        }
        node = node.children.get(char);
        // console.log('node=>', node);
    }

    node.isEndOfWord = true;
    // console.log('root=>', this.root)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const searchInNode = (node,index) => {
        if (index === word.length) return node.isEndOfWord;
        const chat = word[index];

        if (chat !== '.') {
            if (!node.children.has(chat)) return false;
            return searchInNode(node.children.get(chat), index+1);
        } else {
            for (const child of node.children.values()) {
                // console.log('child=>',child)
                if (searchInNode(child,index+ 1)) {
                    return true
                }
            }

            return false;
        }
    }

    return searchInNode(this.root, 0)
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

const xxx = new WordDictionary();
xxx.addWord('bad')
xxx.addWord('dad')
xxx.addWord('mad')
console.log('search=>', xxx.search("pad")); // 返回 False
console.log('search=>', xxx.search("bad")); // 返回 True
console.log('search=>', xxx.search(".ad")); // 返回 True
console.log('search=>', xxx.search("b..")); // 返回 True