const question = `
字典 wordList 中从单词 beginWord 到 endWord 的 转换序列 是一个按下述规格形成的序列 beginWord -> s1 -> s2 -> ... -> sk：
每一对相邻的单词只差一个字母。
    对于 1 <= i <= k 时，每个 si 都在 wordList 中。注意， beginWord 不需要在 wordList 中。
sk == endWord
给你两个单词 beginWord 和 endWord 和一个字典 wordList ，返回 从 beginWord 到 endWord 的 最短转换序列 中的 单词数目 。如果不存在这样的转换序列，返回 0 。
`

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;

    const queue = [];
    queue.push([beginWord, 1]) // [word, 走数]

    while (queue.length) {
        const [word, step] = queue.shift();
        console.log({word, step, wordSet});
        
        for (let i = 0; i < word.length; i++) {
            for (let c = 97; c <= 122; c++) {
                const newWord = word.slice(0, i) + String.fromCharCode(c) + word.slice(i + 1);
                // console.log('newWord=>', newWord, String.fromCharCode(c));
                if (newWord ===endWord) return step + 1;

                if (wordSet.has(newWord)) {
                    queue.push([newWord, step + 1]);
                    wordSet.delete(newWord); // 删除已访问的单词
                }
            }
        }

    }

    return 0;
};

console.log(ladderLength(
    "hit",
    "cog",
    ["hot", "dot", "dog", "lot", "log", "cog"]
))