const question = `给定一个段落 (paragraph) 和一个禁用单词列表 (banned)。返回出现次数最多，同时不在禁用列表中的单词。题目保证至少有一个词不在禁用列表中，而且答案唯一。
禁用列表中的单词用小写字母表示，不含标点符号。段落中的单词不区分大小写。答案都是小写字母。`

const mostCommonWord = (paragraph, banned) => {
  let wordList =  paragraph.toLowerCase().match(/\w+/g)
  // 过滤
  const res = {}
  for (let index = 0; index < wordList.length; index++) {
    let curItem = wordList[index]
    if (!banned.includes(curItem)) {
      if (res[curItem]) {
        res[curItem] += 1
      } else {
        res[curItem] = 1
      }
    }
  }
  let count = 0
  let maxItem = ''
  for (const key in res) {
    if (res[key] > count) {
      count = res[key]
      maxItem = key
    }
  }
  return maxItem
}
console.log(mostCommonWord("a.",[]))
console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.",["hit"]))
console.log(mostCommonWord("Bob. hIt, baLl",["bob", "hit"]))